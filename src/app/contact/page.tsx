'use client';

import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Entre em Contato</h1>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Seu nome"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Seu email"
            className={styles.input}
          />
          <textarea
            placeholder="Sua mensagem"
            className={styles.textarea}
          ></textarea>
          <button type="submit"  className={styles.button}>
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}
