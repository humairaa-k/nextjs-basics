import ContactForm from "@/components/ContactForm"

export const metadata = {
    title: "Contact | Ahmad Portfolio"
}

export default function ContactPage(){
    return(
         <section className="page">
            <h1 className="page-title">Contact Me</h1>
            <p className="page-text">
                Have a project idea, question, or feedback? Send a short message using
                the form below.
            </p>

            <ContactForm />
        </section>
    )
}