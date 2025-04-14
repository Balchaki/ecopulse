'use client';

import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Entre em Contato</h1>
        <form className={styles.form}>
          <label htmlFor={"nome"}>Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome"
            className={styles.input}
          />
          <label htmlFor={"email"}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Seu email"
            className={styles.input}
          />
          <label htmlFor={"message"}>Mensagem</label>
          <textarea
            id="message"
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
