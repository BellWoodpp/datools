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

type CardDemoProps = {
  locale?: string
}

export function CardDemo({ locale = "en" }: CardDemoProps) {
  const [pendingGoogle, setPendingGoogle] = useState(false)
  const [pendingLogin, setPendingLogin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState<string | null>(null)
  const router = useRouter()

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
        setLoginError(result.error.message ?? "登录失败，请重试")
        return
      }
      router.push(homeHref)
    } catch (error) {
      setLoginError((error as Error)?.message ?? "登录失败，请稍后重试")
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
          Login to your account
        </CardTitle>
        <CardDescription className="text-sm text-neutral-500 dark:text-neutral-400">
          Enter your email below to login to your account
        </CardDescription>
        <CardAction className="justify-self-start">
          <Button
            onClick={handleRegister}
            variant="link"
            className="px-0 text-sm font-medium"
          >
            Sign Up
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
                Email
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
                Password
              </Label>
              <Link
                href={resetHref}
                className="ml-auto inline-block text-sm text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-300"
              >
                Forgot your password?
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
            {pendingLogin ? "Logging in..." : "Login"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full border-neutral-300 text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
            onClick={handleGoogleSignIn}
            disabled={pendingGoogle}
          >
            {pendingGoogle ? "Signing in..." : "Login with Google"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
