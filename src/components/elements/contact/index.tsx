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
import Paper5Dark from '@/assets/svg/paper-5-dark.svg';
import WhiteMolufei from '@/assets/svg/white-molufei.svg';
import PinkMolufei from '@/assets/svg/pink-molufei.svg';
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
import useDevice from '@/hooks/use-device';
type ContactElementProps = {
  theme: string;
};
const ContactElement = ({ theme }: ContactElementProps) => {
  const { isMobile, isTablet } = useDevice();
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
  const paper5Image = theme === 'light' ? Paper5 : Paper5Dark;

  const handleToMail = () => {
    window.open(
      `https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZVnHqCMhRTbCMkGGBkrtGzZqHKkPDzVdPDqzKhtZSWNRBgwkSXQTKTqbmPJvlPvzlGgv`,
    );
  };

  const onSubmit = (data: ContactForm) => {
    setIsModalLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
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
    <>
      <div
        className={`relative w-full flex justify-end h-screen'
        `}
      >
        <Image
          src={paper5Image}
          alt="paper"
          className={`w-full object-cover ${
            isMobile || isTablet ? 'h-screen' : 'h-screen'
          }`}
        />
        <div className="absolute top-0 w-full h-full flex flex-col xl:flex-row items-center justify-center">
          <Form {...form}>
            <div className="relative w-full xl:w-1/2 h-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.6 }}
                className="flex w-full xl:hidden items-center justify-center absolute top-10 -z-0"
              >
                <Image
                  src={PinkMolufei}
                  alt="paper"
                  className="h-[60vh] md:h-[40vw] opacity-20 dark:opacity-10"
                />
              </motion.div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full px-4 md:px-16 xl:px-32 py-16 space-y-8 self-start absolute h-full"
              >
                <h1 className="text-center font-montserrat text-3xl md:text-5xl font-semibold">
                  Let’s work together!
                </h1>

                <div className="space-y-3 md:space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="grid gap-0.5 md:gap-1">
                          <FormLabel className="text-sm md:text-base">
                            Name <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Your name"
                              className="text-sm md:text-base mt-1 md:mt-2 bg-white/70 dark:bg-white/60 dark:text-neutral-700 dark:placeholder:text-neutral-600"
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
                        <FormItem className="grid gap-0.5 md:gap-1">
                          <FormLabel className="text-sm md:text-base">
                            Email <span className="text-destructive">*</span>
                          </FormLabel>

                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Your name"
                              className="text-sm md:text-base mt-1 md:mt-2 bg-white/70 dark:bg-white/60 dark:text-neutral-700 dark:placeholder:text-neutral-600"
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
                        <FormItem className="grid gap-0.5 md:gap-1">
                          <FormLabel className="text-sm md:text-base">
                            Message <span className="text-destructive">*</span>
                          </FormLabel>

                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="text-sm md:text-base mt-1 md:mt-2 bg-white/70 dark:bg-white/60 dark:text-neutral-700 dark:placeholder:text-neutral-600 min-h-20 max-h-40"
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
                      className="w-full mt-10 md:mt-20 cursor-pointer"
                      type="submit"
                      // disabled={isDisabled}
                    >
                      Send
                    </Button>
                  </motion.div>
                </div>
                {isMobile || isTablet ? (
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
                            type="button"
                            className="rounded-full w-11 h-11 cursor-pointer"
                            onClick={() => window.open(item.href, '_blank')}
                          >
                            <item.icon className="w-6 h-6" />
                          </Button>
                        </MainTooltip>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </form>
            </div>
          </Form>
          <div className="w-1/2 h-full bg-quarternary/60 pl-10 pr-32 py-16 xl:flex flex-col items-center gap-12 hidden">
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
      <div className="bg-purple-black h-32 md:h-20 w-full flex items-start md:items-center justify-center px-2 py-5">
        <h6 className="text-white">&copy; 2025 Vera Soniya</h6>
      </div>
    </>
  );
};

export default ContactElement;
