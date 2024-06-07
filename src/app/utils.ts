
export const filterProductsByInput = (products: any, input: string): any => {
    return products.filter((product: any) =>
        product.title.toLowerCase().includes(input.toLowerCase()) ||
        product.description.toLowerCase().includes(input.toLowerCase()) ||
        product.category.toLowerCase().includes(input.toLowerCase()) ||
        product.price.toString().includes(input)
    );
}

export const filterProductsByCategory = (products: any, input: string): any => {
    return products.filter((product: any) =>
        product.title.toLowerCase().includes(input.toLowerCase()) ||
        product.totalPrice.toString().includes(input) ||
        product.totalProducts.toString().includes(input)
    );
}
