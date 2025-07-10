import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

function Contato() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await emailjs.sendForm(
        'service_gxhw1wt',
        'template_jahof0i',
        form.current,
        'TCa_DLRdPOeVk7gd6'
      );
      setMessage({ 
        type: 'success', 
        text: 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
      });
      form.current.reset();
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Erro ao enviar a mensagem. Tente novamente ou entre em contato diretamente.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'gabriel@exemplo.com',
      link: 'mailto:gabriel@exemplo.com',
      description: 'Respondo em até 24 horas'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+55 (11) 99999-9999',
      link: 'https://wa.me/5511999999999',
      description: 'Disponível das 9h às 18h'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      value: 'São Paulo, SP - Brasil',
      link: '#',
      description: 'Disponível para trabalho remoto'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/freitasbtw',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/Freitassync',
      color: '#333'
    },
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      url: 'https://wa.me/5511999999999',
      color: '#25D366'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>
          Entre em Contato
        </motion.h2>
        
        <motion.p className="contact-intro" variants={itemVariants}>
          Estou sempre aberto a discutir novos projetos, oportunidades criativas 
          ou simplesmente conversar sobre tecnologia. Vamos construir algo incrível juntos!
        </motion.p>

        <motion.div className="contact-grid" variants={itemVariants}>
          <div className="contact-info-section">
            <motion.h3 variants={itemVariants}>
              Informações de Contato
            </motion.h3>
            
            <motion.div className="contact-cards" variants={itemVariants}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p className="contact-value">{info.value}</p>
                    <span className="contact-description">{info.description}</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div className="social-section" variants={itemVariants}>
              <h4>Conecte-se comigo</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon style={{ color: social.color }} />
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="form-section">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={itemVariants}
              className={isLoading ? 'loading' : ''}
            >
              <h3>Envie uma Mensagem</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome *</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="6" 
                  required
                  placeholder="Conte-me sobre seu projeto, ideia ou como posso ajudá-lo..."
                ></textarea>
              </div>

              {message.text && (
                <motion.div 
                  className={`form-message ${message.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {message.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                  {message.text}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="submit-button"
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        <motion.div className="contact-cta" variants={itemVariants}>
          <h3>Preferências de Contato</h3>
          <div className="preference-grid">
            <div className="preference-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>Para propostas formais e detalhadas</p>
              </div>
            </div>
            <div className="preference-item">
              <FaWhatsapp />
              <div>
                <h4>WhatsApp</h4>
                <p>Para conversas rápidas e esclarecimentos</p>
              </div>
            </div>
            <div className="preference-item">
              <FaLinkedin />
              <div>
                <h4>LinkedIn</h4>
                <p>Para networking e oportunidades profissionais</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contato;