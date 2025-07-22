export function getItemFromLocalStorage<T>(key: string): T | null {
    const ItemLocalStorage = localStorage.getItem(key);
    const item = ItemLocalStorage ? JSON.parse(ItemLocalStorage) : null;

    return item;
}
