"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { createContact } from '@/actions';
import { success } from 'zod';


const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState("")


    async function onSubmit(formData) {
        setIsSubmitting(true);
        setMessage("")

        const result =  await createContact(formData);

        if(result.success){ 
            setMessage("Message sent successfully")
            const form  =  document.getElementById("contact-form");
            form.reset()
        }
        else{
            setMessage(result.error || "Something went wrong");
        }
        setIsSubmitting(false)
    }
    return (
        <Card className='w-full max-w-2xl mx-auto'>
            <CardHeader>
                <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
                {
                    message &&( <div className={`mb-6 p-4 rounded ${message.includes("success") ?
                        "bg-greeen-50 text-green-800" :"bg-red-50 text-red-800"}`}>{message}</div>) 
                }
                <form id="contact-form" className='space-y-6' action={onSubmit}>
                    <div className='flex gap-2'>

                    <div className='space-y-2 w-full' >
                        <Label htmlFor="name">Name: </Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            required
                            disabled={isSubmitting}
                            placeholder="enter your name"
                        />
                    </div>
                    <div className='space-y-2 w-full'>
                        <Label htmlFor="email">Email: </Label>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            required
                            disabled={isSubmitting}
                            placeholder="enter your email"
                        />
                    </div>
                    </div>
                    <div className='space-y-2'> 
                        <Label htmlFor="subject">Subject: </Label>
                        <Input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                            disabled={isSubmitting}
                            placeholder="enter your email"
                        />
                    </div>
                    <div className='space-y-2'> 
                        <Label htmlFor="subject">Message: </Label>
                        <Textarea
                            type="text"
                            name="message"
                            id="message"
                            required
                            disabled={isSubmitting}
                            placeholder="enter your message"
                            className="min-h-30 "
                        />
                    </div>
                    <Button className="w-full" >send Message</Button>
                </form>
            </CardContent>

        </Card>
    );
}

export default ContactForm;
