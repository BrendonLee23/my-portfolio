"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "react-toastify"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from 'emailjs-com'; // Importando o EmailJS

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone & Whatsapp",
    description: "(+55) 92 98211-3979",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "brendo.business1@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adress",
    description: "Manaus, AM - Brazil",
  },
];

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const maxChars = 600;

  const toastStyle = {
    backgroundColor: 'oklch(0.145 0 0)', // Cor do fundo do toast
    color: '#fff', // Cor do texto do toast
    borderRadius: '8px',
    padding: '12px 20px',
  };

  // Função para enviar o email via EmailJS
  const handleSendEmail = (e) => {
    e.preventDefault();

    // Verificando se algum campo está vazio
    if (!firstname || !lastname || !email || !phone || !service || !message) {
      toast.warning("All fields are required. Please fill out all fields.", {
        style: toastStyle, // Aplicando o estilo personalizado
        progressStyle: {
          background: 'linear-gradient(to right, #fcd34d, #fbbf24)' // Gradiente amarelo para a linha de progresso
        }
      });
      return; // Impede o envio do formulário
    }

    const templateParams = {
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    };

    // Enviando o e-mail
    emailjs
      .send(
        "service_ii83zyh", // Substitua com seu Service ID
        "template_zs6uvfl", // Substitua com seu Template ID
        templateParams, // Dados do formulário
        "86wxH1nGd_RjIQPfl" // Substitua com seu Public Key (User ID)
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!", {
            style: toastStyle, // Aplicando o estilo personalizado para sucesso
            progressStyle: {
              background: 'linear-gradient(to right, #00ff00, #32cd32)' // Gradiente verde para a linha de progresso
            }
          });
          // Limpar os campos do formulário após o envio
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
          setService("");
          setMessage("");
        },
        (error) => {
          toast.error("Error sending message, please try again.", {
            style: toastStyle, // Aplicando o estilo personalizado para erro
            progressStyle: {
              background: 'linear-gradient(to right, #ff0000, #ff6347)' // Gradiente vermelho para a linha de progresso
            }
          });
          console.error("Erro:", error);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none pb-8">
            <form
              onSubmit={handleSendEmail} // Adiciona a função de envio de e-mail no submit
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Enter contact information</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Select
                value={service}
                onValueChange={(value) => setService(value)} // Corrigido para usar onValueChange
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-primary">
                  <SelectGroup>
                    <SelectLabel className="font-extrabold">Select a service</SelectLabel>
                    <SelectItem className="cursor-pointer" value="Developer job proposal">
                      Developer job proposal
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="Website Development">
                      Website Development
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="Website Maintenance">
                      Website Maintenance
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="Other matters"> {/* Nova opção */}
                      Other matters
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <div>
                <Textarea
                  className="h-[200px] w-full"
                  placeholder="Type your message here."
                  value={message}
                  onChange={(e) => {
                    if (e.target.value.length <= maxChars) {
                      setMessage(e.target.value);
                    }
                  }}
                />
                <p className="mt-4 text-right text-sm text-gray-500">
                  {message.length}/{maxChars}
                </p>
              </div>
              {/* btn */}
              <Button size="md" className="flex max-w-44 py-3 items-center justify-center">
                <p>Send a Message</p>
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#272C2C] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;