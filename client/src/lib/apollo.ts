import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
  Operation,
} from "@apollo/client";
import store from "../store";

const request = async (operation: Operation): Promise<void> => {
  const headers: { [header: string]: string | number } = {};
  const user = await store.get().getState().authState.user;
  headers.Authorization = `Bearer ${user.token}`;

  operation.setContext({
    headers,
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: ZenObservable.Subscription;
      Promise.resolve(operation)
        .then((innerOperation) => request(innerOperation))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) {
          handle.unsubscribe();
        }
      };
    })
);

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    requestLink,
    new HttpLink({
      uri: `https://api.github.com/graphql`,
    }),
  ]),
  cache: new InMemoryCache(),
});
