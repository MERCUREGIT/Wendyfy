export default{
    variations: [],
    formdata: new FormData(),
    variationManager: function(variation_length){
        let colors = [], variation_color = undefined, variation_sizes = [], sizes = [], size_array = [], stock = undefined, variation_stock = [];
        for (let i = 0; i < variation_length; i++) {
                    colors = document.querySelectorAll(`input[id='colors${i}']:checked`);
                    sizes = document.querySelectorAll(`input[id='sizes${i}']:checked`);
                    stock = document.querySelectorAll(`input[id='stock${i}']`);
                    // get value of each color
                    colors.forEach((color)=>{
                        variation_color = color.value;
                    })
                    // get value of each size
                    sizes.forEach((size)=>{
                        variation_sizes.push(size.value);
                    })
                    // get value of each stock
                    stock.forEach((st)=>{
                        st.value ? variation_stock.push(st.value) : null;
                    })
                    for (let j = 0; j < sizes.length; j++) {
                        size_array.push({
                            name: variation_sizes[j],
                            stock: variation_stock[j]
                        })
                    }
                    this.formdata.append(`variation_image`, document.querySelector(`#image${i}`).files[0]);
                    this.variations.push({
                        image: '',
                        color: variation_color,
                        size: size_array
                    });
                    variation_color =[]; variation_sizes = []; size_array = []; variation_stock = [];
        }
    },
    addProduct: function(data, variation_length){
        this.variationManager(variation_length);
        this.formdata.append('sku',data.sku);
        this.formdata.append('new',true);
        this.formdata.append('name',data.name);
        this.formdata.append('price', parseInt(data.price));
        this.formdata.append('salePrice', parseInt(data.price));
        this.formdata.append('discount', data.discount);
        this.formdata.append('image', data.image);
        this.formdata.append('shortDescription', data.short_description);
        this.formdata.append('fullDescription', data.full_description);
        this.formdata.append('allowComments', data.comments);
        for (let category of data.categories) {
            this.formdata.append('categories', category);
        }
        this.formdata.append('tags', data.tag);
        this.formdata.append('variations', JSON.stringify(this.variations));
        
        return this.formdata;
    }
}