import $ from 'jquery';
export default{
    productFilter: function(){
        $(document).ready(function(){
            $("#search").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#table tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                });
            });
        });
    },
    pagination: function(data){
        let arr1 = [], arr2 = [], k = 0, i = 0;
        for (i = 0; i < data.length; i++) {
            arr2.push(data[i]);
            k++;
            if (k == 15) {
                arr1.push(arr2);
                arr2 = [];
                k=0;
            }
        }
        if(arr2.length != 0){
            arr1.push(arr2);
        }
        return arr1;
    }
}