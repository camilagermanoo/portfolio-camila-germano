import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

export const ContactSection = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(
        () => {
          toast({
            title: "Mensagem enviada!",
            description: "Obrigada pelo contato. Retornarei em breve 😊",
          })
          form.current.reset()
        },
        (error) => {
          toast({
            title: "Erro ao enviar mensagem",
            description: "Algo deu errado. Tente novamente.",
            variant: "destructive",
          })
          console.log(error)
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tem um projeto em mente ou quer conversar sobre uma oportunidade?
          Fique à vontade para entrar em contato. Estou sempre aberta a novos desafios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Informações de contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:camyrodrigues23@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    camyrodrigues23@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Celular</h4>
                  <a
                    href="tel:+5561999456990"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (61) 99945-6990
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-muted-foreground">
                    Brasília - DF, Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Conecte-se comigo</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/camila-rodrigues-93196a241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Enviar uma mensagem
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Nome Completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="exemplo@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Sua mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                  placeholder="Olá, eu gostaria de conversar sobre..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
