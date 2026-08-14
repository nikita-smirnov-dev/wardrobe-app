export interface ClothingItem {
  id: string;
  name: string;
  category: string;
  addedAt: string;
  imageUrl: string;
}

export interface IAddItemForm {
  name: string;
  category: string;
  addedAt: string;
  image: FileList;
}
