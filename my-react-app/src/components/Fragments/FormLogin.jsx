import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = (props) => {
    // UNTUK MEMASUKKAN APA YG DI INPUT OLEH USER KEDALAM LOCAL STORAGE DAN MEMBUKA HALAMAN PRODUCT KETIKA DI CLICK LOGIN
    const handleLogin = (e) => {
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        window.location.href = '/products';
        e.preventDefault();
    };
    return (
        <form onSubmit={handleLogin}>
            <InputForm label="Email" type="name" placeholder="example@gmail.com" name="email"></InputForm>
            <InputForm label="Password" type="password" placeholder="*****" name="password"></InputForm>
            <Button classname="bg-teal-600 w-full" type="submit">Login</Button>
        </form>
    );
};

export default FormLogin;