'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { contact } from '@/assets/datas/contact';
import Paper5 from '@/assets/svg/paper-5.svg';
import WhiteMolufei from '@/assets/svg/white-molufei.svg';
import MainTooltip from '@/components/main-tooltip';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ContactForm, contactScheme } from '@/scheme/contact';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';
import ModalLoading from '@/components/modal-loading';
const ContactElement = () => {
  const [isModalLoading, setIsModalLoading] = useState(false);
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactScheme),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const isDisabled = !form.formState.isValid;

  const handleToMail = () => {
    window.open(
      `https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZVnHqCMhRTbCMkGGBkrtGzZqHKkPDzVdPDqzKhtZSWNRBgwkSXQTKTqbmPJvlPvzlGgv`
    );
  };

  const onSubmit = (data: ContactForm) => {
    setIsModalLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setIsModalLoading(false);
        toast.success('Success!', {
          description: 'Your message has been sent successfully.',
        });
        form.reset();
      })
      .catch(() => {
        setIsModalLoading(false);
        toast.warning('Warning!', {
          description: (
            <div className="space-y-1">
              <h6>
                Something went wrong, Please try sending it via Gmail instead
              </h6>
              <button
                className="flex items-center gap-1 cursor-pointer border border-amber-500 px-2 py-1 rounded-lg hover:bg-amber-400/20"
                onClick={() => {
                  handleToMail();
                }}
              >
                <Mail size={16} />
                Send via Gmail
              </button>
            </div>
          ),
        });
      });
  };

  return (
    <div className="relative w-full flex justify-end h-screen">
      <Image src={Paper5} alt="paper" className="h-screen w-auto" />
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-1/2 px-32 py-16 space-y-8 self-start"
          >
            <h1 className="text-center font-montserrat text-5xl font-semibold">
              Let’s work together! hahah
            </h1>

            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-1">
                      <FormLabel>
                        Name <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your name"
                          className="mt-2 bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-1">
                      <FormLabel>
                        Email <span className="text-destructive">*</span>
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your name"
                          className="mt-2 bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-1">
                      <FormLabel>
                        Message <span className="text-destructive">*</span>
                      </FormLabel>

                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="mt-2 bg-white min-h-20 max-h-40"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <Button
                  className="w-full mt-20 cursor-pointer"
                  type="submit"
                  disabled={isDisabled}
                >
                  Send
                </Button>
              </motion.div>
            </div>
          </form>
        </Form>
        <div className="w-1/2 h-full bg-quarternary/60 pl-10 pr-32 py-16 flex flex-col items-center gap-12">
          <div className="flex items-center self-start gap-4">
            {contact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 * index }}
              >
                <MainTooltip content={item.name}>
                  <Button
                    className="rounded-full w-11 h-11 cursor-pointer"
                    onClick={() => window.open(item.href, '_blank')}
                  >
                    <item.icon className="w-6 h-6" />
                  </Button>
                </MainTooltip>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.6 }}
          >
            <Image src={WhiteMolufei} alt="paper" className="w-auto" />
          </motion.div>
        </div>
      </div>
      <ModalLoading
        open={isModalLoading}
        onOpenChange={() => setIsModalLoading(false)}
        label="Loading..."
      />
    </div>
  );
};

export default ContactElement;
