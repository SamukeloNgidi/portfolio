export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#99BC85'); //setting color of the tag and how it will be displayed
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred'); //these static variables will act as enums
    static readonly JAVA = new Tag('Java', 'darkorange');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'purple');
    static readonly JSX = new Tag('JSX', 'lightblue');
    static readonly REACT = new Tag('React', 'green');

    private constructor(private readonly key: string, public readonly color: string) { 

    }

    toString(){
        return this.key;
    }
}