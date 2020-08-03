export async function storeValue(key: string, value: string): Promise<void> {
  try {
    await localStorage.setItem(key, value.toString());
  } catch (error) {
    console.log("localStorage error during store:", error);
  }
}
