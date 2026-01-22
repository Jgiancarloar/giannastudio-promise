import RsvpIcon from '../assets/icons/RsvpIcon'
import { eventData } from "../data/eventData";

const RsvpForm = () => {

    const date = new Date(eventData.date.iso);
    
        const month = date.toLocaleDateString("es-ES", { month: "long" });
        const day = date.getDate();

    const whatsappUrl =
        "https://wa.me/51906069833?text=Hola%20😊,%20confirmo%20mi%20asistencia%20a%20la%20boda.%20¡Muchas%20gracias!";

    return (
        <section className='flex flex-col items-center px-10 text-center'>
            <p className="font-bold mb-5 text-xl text-center uppercase">Confirmación de asistencia</p>
            <div className="h-16 mb-5 w-16">
                <RsvpIcon />
            </div>
            <p className='mb-5'>
                Agradecemos que confirmes tu asistencia antes del {day} de <span className='capitalize'>{month}</span>.
            </p>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#791925] px-5 py-3 rounded-full text-white uppercase"
            >
                Confirmar
            </a>
        </section>
    )
}

export default RsvpForm
