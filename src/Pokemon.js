class Pokemon {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.type = data.types.map(type => {
            return type.type.name;
        });
    }
}

export default Pokemon;