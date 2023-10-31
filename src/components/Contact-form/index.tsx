import { useForm } from 'react-hook-form'
import { ContainerForm, FormContent, Texts } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { projectAnimation, titlesAnimation } from '../../lib/animations'

const contactFormShema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormShema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormShema),
  })

  const onSubmit = async (data: ContactFormData) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_Service_ID,
        import.meta.env.VITE_Template_ID,
        templateParams,
        import.meta.env.VITE_Public_KEY,
      )

      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <ContainerForm id="Contact">
      <Texts>
        <span>../contato</span>
        <motion.h2
          {...titlesAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Vamos trabalhar juntos? <br /> Entre em contato
        </motion.h2>
      </Texts>

      <FormContent>
        <motion.div {...projectAnimation}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Nome"
              required
              {...register('name')}
            />

            <input
              type="email"
              placeholder="E-mail"
              required
              {...register('email')}
            />

            <textarea
              placeholder="Mensagem"
              required
              {...register('message')}
              maxLength={500}
            />

            <button type="submit" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </button>
            <div className="filter"></div>
          </form>
        </motion.div>
      </FormContent>
    </ContainerForm>
  )
}
