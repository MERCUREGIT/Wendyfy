function registerVariations(variation_name){
    let data = [];
    variation_name == 'colors' ? data = this.colors : null;
    variation_name == 'tags' ? data = this.tags : null;
    variation_name == 'category' ? data = this.categories : null;
    variation_name == 'sizes' ? data = this.sizes : null;
    axios.put(`${config.server}/product-details/${variation_name}`, {name: data}, {headers: {...config.headers}}).then(()=>{
        this.$router.go();
    }).catch((error)=>{
        console.log(error);
    });
}