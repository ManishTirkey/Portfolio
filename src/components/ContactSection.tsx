
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to our email handler
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-gradient text-glow">
        Contact Me
      </h2>
      <p className="mb-6 text-gray-300">
        Feel free to reach out if you have any questions or just want to say hello!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white/5 border-white/10 focus:border-sidebar-primary"
            required
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/5 border-white/10 focus:border-sidebar-primary"
            required
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white/5 border-white/10 focus:border-sidebar-primary min-h-[120px]"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sidebar-primary hover:bg-sidebar-primary/80 text-white transition-colors"
        >
          {isSubmitting ? (
            <>Processing</>
          ) : (
            <>
              <Send className="mr-2" size={16} /> Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactSection;
