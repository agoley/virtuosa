import { CssClassModel } from './cssClassModel';

export class PageModel {
    public id: number;
    public type: string;
    public name: string;
    public parentID: number;
    public html: string;
    public jsData: object;
    public cssData: CssClassModel[];

    constructor(){}
}