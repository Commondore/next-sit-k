import { loginAction } from "@/actions/login.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <>
      <h1 className="text-3xl text-center my-8">Форма авторизации</h1>
      <form action={loginAction} className="max-w-1/3 mx-auto">
        <div className="mb-4">
          <Input type="email" name="identifier" placeholder="Введите email" />
        </div>
        <div className="mb-4">
          <Input type="password" name="password" placeholder="Введите пароль" />
        </div>
        <div className="text-center">
          <Button type="submit">Войти</Button>
        </div>
      </form>
    </>
  );
}
