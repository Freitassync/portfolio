import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', form.current, 'SEU_PUBLIC_KEY')
      .then((result) => {
        alert('Mensagem enviada com sucesso!');
      }, (error) => {
        alert('Erro ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
    <section>
      <div className="container">
        <h2>Contato</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="message" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contato;