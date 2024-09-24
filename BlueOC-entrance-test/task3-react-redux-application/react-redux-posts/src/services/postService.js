import axios from 'axios';


const localApiUrl = 'https://jsonplaceholder.typicode.com/posts'

const localAxiosInstance = axios.create({
    baseURL: localApiUrl
});

const productService = {
    async getAllPosts() {
        try {
            const response = await localAxiosInstance.get('/');
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    async addPost(formData) {
        try {
            console.log(formData)
            const response = await localAxiosInstance.post('/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    },


};

export default productService;
