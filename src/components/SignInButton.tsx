'use client'

import React from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import styles from "./SignInButton.module.css"

export default function SignInButton({size="large"}: {size?: "small" | "large"}) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>
  }

  if (session) {
    return (
      <div className={styles.userContainer}>
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt={session.user.name || ""}
            width={32}
            height={32}
            className={styles.avatar}
          />
        )}
        <span className={styles.userName}>{session.user?.name}</span>
        <button onClick={() => signOut()} className={styles.signOutButton}>
          Sign Out
        </button>
      </div>
    )
  }

  if (size === 'small') {
    return (
      <button
        onClick={() => signIn("google")}
        className={styles.googleButton}
      >
        <Image
          src="/google.svg"
          alt="Google logo"
          width={18}
          height={18}
          className={styles.googleIcon}
        />
      </button>
    )
  }

  return (
    <button
      onClick={() => signIn("google")}
      className={styles.googleButton}
    >
      <Image
        src="/google.svg"
        alt="Google logo"
        width={18}
        height={18}
        className={styles.googleIcon}
      />
      <span>Sign in with Google</span>
    </button>
  )
} 