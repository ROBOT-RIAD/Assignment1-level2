{
    type FormatString = ( value : string ,toUpper?: boolean) => string;

    const formatString: FormatString =(value,toUpper)=>{

        if(toUpper === false)
        {
            return value.toLowerCase();
        }
        
        return value.toUpperCase();
    }

    const res1 = formatString("Hello");
    const res2 = formatString("Hello", true);
    const res3 = formatString("Hello", false);
    console.log(res1 ,res2 ,res3);







    type Item = {
        title : string;
        rating : number;
    }
    type GenericArray<T> = Array<T>;
    type FilterByRating = (items: GenericArray<Item>) =>GenericArray<Item>;

    const filterByRating: FilterByRating =(items)=>{
        return items.filter((item:Item): boolean => item.rating >= 4);
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];

    const res4 =  filterByRating(books);
    console.log(res4);


    

    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        const result: T[] = [];
        arrays.forEach(array => result.push(...array));
        return result;
    }

    const res5 = concatenateArrays(["a", "b"], ["c"]); 
    const res6 = concatenateArrays([1, 2], [3, 4], [5]); 
    console.log(res5);
    console.log(res6);

    
    

    type GetInfo = () => string;

    class Vehicle{
        constructor(private make: string , private year: number){

        }
        getInfo: GetInfo = () => {
            return `make: ${this.make}, year: ${this.year}`;
        };
    }


    class Car extends Vehicle{
        constructor(make: string, year: number,private model: string){
            super(make, year);
        }

        getModel : GetInfo = ()=>{
            return `model: ${this.model}`
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    const res7 =myCar.getInfo();
    const res8 =myCar.getModel();
    console.log(res7);
    console.log(res8);




    type ProcessValue = (value: string | number) => number;

    const  processValue: ProcessValue = (value) =>{
        if( typeof value === "string")
        {
            return value.length;
        }else{
            return value*2;
        }
    }

    const res9 = processValue("hello");
    const res10 = processValue(10);
    console.log(res9);
    console.log(res10);





    interface Product {
        name: string;
        price: number;
    }

    type GetMostExpensiveProduct = (products: GenericArray<Product>) => Product | null;

    const getMostExpensiveProduct: GetMostExpensiveProduct = (products)=>{
       if(products.length === 0)
        {
            return null;
        }else{
           return products.reduce((max: Product, product : Product): Product =>(product.price > max.price ? product : max) );
        }
    }

     
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];


    const res11 = getMostExpensiveProduct(products);
    console.log(res11);





    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    type GetDayType = (day: Day) => string;
    const getDayType: GetDayType = (day) =>{
        if (day === Day.Sunday) {
            return "Weekend";
        } else {
            return "Weekday";
        }
    }

    const res12 =getDayType(Day.Monday);
    const res13 =getDayType(Day.Sunday);
    console.log(res12);
    console.log(res13);



    type SquareAsync = (value : number) => Promise<number>;
    const squareAsync: SquareAsync = async(value)=>{
       if(value < 0) {
        throw new Error("Error: Negative number not allowed")
       }

       return new Promise((resolve)=>{
        setTimeout(()=>resolve(value*value),1000);
       });
    }
    squareAsync(4).then(console.log);
    // squareAsync(-3).catch(console.error);

}