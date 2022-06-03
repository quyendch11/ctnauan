export class Recipe{
    titles: string;
    servings: number;
    ingredients: string;
    constructor(titles: string,
        servings: number,
        ingredients:string){
            this.titles = titles;
            this.servings = servings;
            this.ingredients = ingredients;
        }
getTitle(): string {
    return this.titles
}
setTitle(title: string){
    this.titles = title
}
setServings(servings: number){
    this.servings = servings;
}
getServings(): number {
    return this.servings;
}
getIngredient(): string {
    return this.ingredients;
}
}
