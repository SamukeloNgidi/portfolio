import { Tag } from "./tag";

export interface Project { //represents a project & hods all rrelevant data needed for the site
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}