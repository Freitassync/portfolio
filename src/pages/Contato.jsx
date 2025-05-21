import { useRef } from 'react';
  import { motion } from 'framer-motion';
  import emailjs from 'emailjs-com';

  function Contato() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          'service_gxhw1wt',
          'template_jahof0i',
          form.current,
          'TCa_DLRdPOeVk7gd6'
        )
        .then(
          (result) => {
            alert('Mensagem enviada com sucesso!');
            form.current.reset();
          },
          (error) => {
            alert('Erro ao enviar a mensagem. Tente novamente.');
          }
        );
    };

    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Entre em Contato
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
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
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    );
  }

  export default Contato;