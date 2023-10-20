import { useForm } from 'react-hook-form'
import { BgGround, ContainerForm, Texts } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Footer } from '../Footer'

import { z } from 'zod'

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

  return (
    <BgGround>
      <ContainerForm>
        <Texts>
          <span>../contato</span>
          <h2>Vamos trabalhar juntos? Entre em contato</h2>
        </Texts>

        <form onSubmit={handleSubmit}>
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
        </form>
      </ContainerForm>
      <Footer />
    </BgGround>
  )
}
