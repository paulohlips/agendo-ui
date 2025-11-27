import { IconLogin, IconUserCircle, IconUsers } from "@tabler/icons-react";
import type React from "react";
import { useState } from "react";
import styles from "./LoginSignup.module.css";

interface LoginSignupProps {
    onLogin: (email: string, userType: "professional" | "client") => void;
}

export function LoginSignup({ onLogin }: LoginSignupProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedType, setSelectedType] = useState<
        "professional" | "client" | null
    >(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password && selectedType) {
            setIsSubmitting(true);
            setTimeout(() => {
                onLogin(email, selectedType);
            }, 500);
        }
    };

    const handleForgotPassword = () => {
        alert("Password reset link will be sent to your email");
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>SchedulePro</h1>
                    <p className={styles.subtitle}>Sign in to continue</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Email address</label>
                        <input
                            className={styles.input}
                            placeholder="you@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.passwordSection}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Password</label>
                            <input
                                className={styles.input}
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className={styles.forgotPassword}
                        >
                            Forgot password?
                        </button>
                    </div>

                    <div>
                        <div className={styles.userTypeLabel}>I am a...</div>
                        <div className={styles.userTypeGrid}>
                            <button
                                type="button"
                                onClick={() => setSelectedType("professional")}
                                className={`${styles.userTypeButton} ${selectedType === "professional" ? styles.active : ""}`}
                            >
                                <IconUserCircle className={styles.userTypeIcon} stroke={1.5} />
                                <div className={styles.userTypeText}>Professional</div>
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedType("client")}
                                className={`${styles.userTypeButton} ${selectedType === "client" ? styles.active : ""}`}
                            >
                                <IconUsers className={styles.userTypeIcon} stroke={1.5} />
                                <div className={styles.userTypeText}>Client</div>
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`${styles.button} ${isSubmitting ? styles.loading : ''}`}
                        disabled={!email || !password || !selectedType || isSubmitting}
                    >
                        <IconLogin size={20} />
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <div className={styles.footer}>
                    Don't have an account?{" "}
                    <button type="button" className={styles.signupLink}>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}
