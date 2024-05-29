import Input from "@/components/ui/input/Input";
import cl from "./login.module.css"
import {Button} from "@/components/ui/button/Button";
const LoginForm = () => {
    return (
        <>
            <p className={cl.container}>Log In</p>
            <form className={cl.formcontainer}>
                <Input placeholder='username' />
                <Input type='password' placeholder='password' />
                <Button>Logging</Button>
            </form>
        </>
    );
};

export default LoginForm;
