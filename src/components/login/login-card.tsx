"use client"

import { useMemo, useState, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-server/client"
import { type Locale, defaultLocale } from "@/i18n/types"

const loginCopy: Record<
  Locale,
  {
    title: string
    description: string
    signUp: string
    email: string
    password: string
    forgot: string
    login: string
    loggingIn: string
    loginWithGoogle: string
    signingWithGoogle: string
    error: string
    errorRetry: string
  }
> = {
  en: {
    title: "Login to your account",
    description: "Enter your email below to login to your account",
    signUp: "Sign Up",
    email: "Email",
    password: "Password",
    forgot: "Forgot your password?",
    login: "Login",
    loggingIn: "Logging in...",
    loginWithGoogle: "Login with Google",
    signingWithGoogle: "Signing in...",
    error: "Login failed, please retry",
    errorRetry: "Login failed, please try again later",
  },
  zh: {
    title: "登录你的账号",
    description: "输入邮箱和密码登录账号",
    signUp: "注册",
    email: "邮箱",
    password: "密码",
    forgot: "忘记密码？",
    login: "登录",
    loggingIn: "登录中...",
    loginWithGoogle: "使用 Google 登录",
    signingWithGoogle: "正在使用 Google 登录...",
    error: "登录失败，请重试",
    errorRetry: "登录失败，请稍后重试",
  },
  ja: {
    title: "アカウントにログイン",
    description: "メールアドレスとパスワードを入力してください",
    signUp: "新規登録",
    email: "メール",
    password: "パスワード",
    forgot: "パスワードをお忘れですか？",
    login: "ログイン",
    loggingIn: "ログイン中...",
    loginWithGoogle: "Google でログイン",
    signingWithGoogle: "Google でサインイン中...",
    error: "ログインに失敗しました。再試行してください",
    errorRetry: "ログインに失敗しました。後でもう一度お試しください",
  },
  es: {
    title: "Inicia sesión en tu cuenta",
    description: "Ingresa tu correo y contraseña para iniciar sesión",
    signUp: "Registrarse",
    email: "Correo electrónico",
    password: "Contraseña",
    forgot: "¿Olvidaste tu contraseña?",
    login: "Iniciar sesión",
    loggingIn: "Iniciando...",
    loginWithGoogle: "Iniciar con Google",
    signingWithGoogle: "Conectando con Google...",
    error: "Error al iniciar sesión, inténtalo de nuevo",
    errorRetry: "Error al iniciar sesión, inténtalo más tarde",
  },
  de: {
    title: "Bei deinem Konto anmelden",
    description: "E-Mail und Passwort eingeben, um dich anzumelden",
    signUp: "Registrieren",
    email: "E-Mail",
    password: "Passwort",
    forgot: "Passwort vergessen?",
    login: "Anmelden",
    loggingIn: "Wird angemeldet...",
    loginWithGoogle: "Mit Google anmelden",
    signingWithGoogle: "Mit Google wird angemeldet...",
    error: "Anmeldung fehlgeschlagen, bitte erneut versuchen",
    errorRetry: "Anmeldung fehlgeschlagen, bitte später erneut versuchen",
  },
  fr: {
    title: "Connectez-vous à votre compte",
    description: "Entrez votre email et mot de passe pour vous connecter",
    signUp: "S'inscrire",
    email: "Email",
    password: "Mot de passe",
    forgot: "Mot de passe oublié ?",
    login: "Se connecter",
    loggingIn: "Connexion...",
    loginWithGoogle: "Se connecter avec Google",
    signingWithGoogle: "Connexion via Google...",
    error: "Échec de connexion, réessayez",
    errorRetry: "Échec de connexion, réessayez plus tard",
  },
  pt: {
    title: "Entre na sua conta",
    description: "Digite seu e-mail e senha para entrar",
    signUp: "Cadastrar",
    email: "Email",
    password: "Senha",
    forgot: "Esqueceu a senha?",
    login: "Entrar",
    loggingIn: "Entrando...",
    loginWithGoogle: "Entrar com Google",
    signingWithGoogle: "Conectando com Google...",
    error: "Falha ao entrar, tente novamente",
    errorRetry: "Falha ao entrar, tente mais tarde",
  },
  ru: {
    title: "Войдите в свой аккаунт",
    description: "Введите email и пароль для входа",
    signUp: "Зарегистрироваться",
    email: "Email",
    password: "Пароль",
    forgot: "Забыли пароль?",
    login: "Войти",
    loggingIn: "Вход...",
    loginWithGoogle: "Войти через Google",
    signingWithGoogle: "Вход через Google...",
    error: "Не удалось войти, попробуйте снова",
    errorRetry: "Не удалось войти, попробуйте позже",
  },
  id: {
    title: "Masuk ke akun Anda",
    description: "Masukkan email dan kata sandi untuk masuk",
    signUp: "Daftar",
    email: "Email",
    password: "Kata sandi",
    forgot: "Lupa kata sandi?",
    login: "Masuk",
    loggingIn: "Masuk...",
    loginWithGoogle: "Masuk dengan Google",
    signingWithGoogle: "Menghubungkan ke Google...",
    error: "Gagal masuk, coba lagi",
    errorRetry: "Gagal masuk, coba beberapa saat lagi",
  },
  ar: {
    title: "سجّل الدخول إلى حسابك",
    description: "أدخل البريد الإلكتروني وكلمة المرور لتسجيل الدخول",
    signUp: "إنشاء حساب",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    forgot: "نسيت كلمة المرور؟",
    login: "تسجيل الدخول",
    loggingIn: "جارٍ تسجيل الدخول...",
    loginWithGoogle: "تسجيل الدخول عبر Google",
    signingWithGoogle: "جارٍ الاتصال بـ Google...",
    error: "فشل تسجيل الدخول، حاول مرة أخرى",
    errorRetry: "فشل تسجيل الدخول، حاول لاحقًا",
  },
}

type CardDemoProps = {
  locale?: Locale
}

export function CardDemo({ locale = defaultLocale }: CardDemoProps) {
  const [pendingGoogle, setPendingGoogle] = useState(false)
  const [pendingLogin, setPendingLogin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState<string | null>(null)
  const router = useRouter()
  const copy = loginCopy[locale] ?? loginCopy.en

  const signUpHref = useMemo(
    () => (locale === "en" ? "/register" : `/${locale}/register`),
    [locale],
  )
  const homeHref = useMemo(
    () => (locale === "en" ? "/" : `/${locale}`),
    [locale],
  )
  const resetHref = useMemo(
    () => (locale === "en" ? "/reset-password" : `/${locale}/reset-password`),
    [locale],
  )

  const handleRegister = useCallback(() => {
    router.push(signUpHref)
  }, [router, signUpHref])

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (pendingLogin) return
    setPendingLogin(true)
    setLoginError(null)
    try {
      const result = await authClient.signIn.email({
        email: email.trim(),
        password: password.trim(),
        callbackURL:
          typeof window !== "undefined" ? window.location.origin : undefined,
      })
      if ((result as { error?: { message?: string } })?.error) {
        setLoginError(result.error.message ?? copy.error)
        return
      }
      router.push(homeHref)
    } catch (error) {
      setLoginError((error as Error)?.message ?? copy.errorRetry)
    } finally {
      setPendingLogin(false)
    }
  }

  const handleGoogleSignIn = () => {
    setPendingGoogle(true)
    void authClient
      .signIn.social({
        provider: "google",
        callbackURL:
          typeof window !== "undefined" ? window.location.origin : undefined,
      })
      .catch((error) => {
        console.error("[Better Auth] Google sign-in failed", error)
      })
      .finally(() => setPendingGoogle(false))
  }

  return (
    <Card className="w-full max-w-md rounded-xl border border-black/10 bg-white px-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-black dark:shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          {copy.title}
        </CardTitle>
        <CardDescription className="text-sm text-neutral-500 dark:text-neutral-400">
          {copy.description}
        </CardDescription>
        <CardAction className="justify-self-start">
          <Button
            onClick={handleRegister}
            variant="link"
            className="px-0 text-sm font-medium"
          >
            {copy.signUp}
          </Button>
        </CardAction>
      </CardHeader>
      <form onSubmit={handleLogin} className="space-y-3">
        <CardContent className="px-0">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-neutral-700 dark:text-neutral-300"
              >
                {copy.email}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-neutral-300 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label
                  htmlFor="password"
                className="text-neutral-700 dark:text-neutral-300"
              >
                {copy.password}
              </Label>
              <Link
                href={resetHref}
                className="ml-auto inline-block text-sm text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-300"
              >
                {copy.forgot}
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-neutral-300 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              />
            </div>
          </div>
          {loginError ? (
            <p className="text-sm text-red-600 dark:text-red-400">{loginError}</p>
          ) : null}
        </CardContent>
        <CardFooter className="flex-col gap-2 px-0">
          <Button
            type="submit"
            disabled={pendingLogin}
            className="w-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            {pendingLogin ? copy.loggingIn : copy.login}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full border-neutral-300 text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
            onClick={handleGoogleSignIn}
            disabled={pendingGoogle}
          >
            {pendingGoogle ? copy.signingWithGoogle : copy.loginWithGoogle}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
