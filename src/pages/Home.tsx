import { useState, useEffect } from 'react';
import { WifiOff, QrCode, ChefHat, PackageCheck, Home as HomeIcon, MonitorPlay, Star, HelpCircle, Info, ShieldCheck } from 'lucide-react';

const CAROUSEL_IMAGES = [
  { src: `${import.meta.env.BASE_URL}Carrusel/Dashboard.png`, title: 'Panel Principal', desc: 'Obtén una visión general de tus ventas, ingresos y toda la actividad en tiempo real.' },
  { src: `${import.meta.env.BASE_URL}Carrusel/Caja.png`, title: 'Caja Rápida', desc: 'Gestiona cobros, unifica cuentas y emite tickets al instante con una interfaz fluida.' },
  { src: `${import.meta.env.BASE_URL}Carrusel/Cocina.png`, title: 'Monitor de Cocina', desc: 'Las comandas llegan al chef al momento, logrando una sincronización perfecta con los camareros.' },
  { src: `${import.meta.env.BASE_URL}Carrusel/Historial.png`, title: 'Historial Auditado', desc: 'Consulta un registro exacto de cada movimiento o venta para tu tranquilidad administrativa.' },
  { src: `${import.meta.env.BASE_URL}Carrusel/Inventario.png`, title: 'Inventario Inteligente', desc: 'Se descuentan ingredientes automáticamente por cada producto servido. No te quedes sin stock.' },
  { src: `${import.meta.env.BASE_URL}Carrusel/Productos.png`, title: 'Catálogo de Menú', desc: 'Edita precios, fotos y descripciones de tu menú digital escaneable con total autonomía.' },
  { src: `${import.meta.env.BASE_URL}Carrusel/Reporte.png`, title: 'Reportes Vivos', desc: 'Decide con inteligencia. Descubre qué horarios son pico y cuáles son tus platos estrella.' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'caracteristicas' | 'como' | 'licencia' | 'faq' | 'image'>('inicio');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if ((activeTab === 'image' || activeTab === 'inicio') && !isModalOpen) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
      }, 6000); // 6s as per user request
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeTab, isModalOpen]);

  const renderDynamicContent = () => {
    switch (activeTab) {
      case 'caracteristicas':
        return (
          <div className="flex flex-col h-full text-foreground1 md:text-foreground2 animate-in fade-in duration-500 overflow-hidden">
            <h3 className="text-3xl font-bold mt-4 mb-4 md:mt-0 md:mb-2 font-heading shrink-0">
              Todo lo que necesitas, <span className="text-background2 md:text-background1">sin depender de nadie.</span>
            </h3>

            <div 
              className="flex-1 overflow-y-auto pt-6 pb-6 pr-4 space-y-6 scrollbar-thin md:scrollbar-thumb-background1/20 scrollbar-thumb-background2/20 scrollbar-track-transparent"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 10px, black calc(100% - 40px), transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10px, black calc(100% - 40px), transparent)'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-foreground1/10 md:bg-foreground2/10 p-3 shrink-0 border border-foreground1/5 md:border-foreground2/5">
                  <WifiOff className="w-6 h-6 text-background2 md:text-background1" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 font-heading">100% Offline (Red Local)</h4>
                  <p className="text-foreground1/70 md:text-foreground2/70 text-sm leading-relaxed font-body">
                    Instala el servidor en tu PC y crea tu propia red. Si se cae el internet o hay apagones de datos, tu negocio sigue facturando sin interrupciones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-foreground1/10 md:bg-foreground2/10 p-3 shrink-0 border border-foreground1/5 md:border-foreground2/5">
                  <QrCode className="w-6 h-6 text-background2 md:text-background1" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 font-heading">Menú Digital Autogestionable</h4>
                  <p className="text-foreground1/70 md:text-foreground2/70 text-sm leading-relaxed font-body">
                    Tus clientes escanean el código de su mesa y piden directamente desde sus teléfonos. Se acabaron las esperas para ser atendidos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-foreground1/10 md:bg-foreground2/10 p-3 shrink-0 border border-foreground1/5 md:border-foreground2/5">
                  <ChefHat className="w-6 h-6 text-background2 md:text-background1" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 font-heading">Monitor de Cocina y Caja</h4>
                  <p className="text-foreground1/70 md:text-foreground2/70 text-sm leading-relaxed font-body">
                    Las comandas llegan a la pantalla del chef al instante. El cajero unifica las cuentas y emite tickets térmicos con un solo clic.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-foreground1/10 md:bg-foreground2/10 p-3 shrink-0 border border-foreground1/5 md:border-foreground2/5">
                  <PackageCheck className="w-6 h-6 text-background2 md:text-background1" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 font-heading">Inventario por Recetas</h4>
                  <p className="text-foreground1/70 md:text-foreground2/70 text-sm leading-relaxed font-body">
                    Vende una hamburguesa y el sistema descontará automáticamente el pan, los gramos de carne y el queso de tu almacén.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'como':
        return (
          <div className="flex flex-col gap-4 text-foreground1 md:text-foreground2 animate-in slide-in-from-right-4 duration-500">
            <h3 className="text-3xl font-semibold font-heading tracking-tight mb-2 underline decoration-background2 md:decoration-background1 underline-offset-8">¿Cómo funciona?</h3>
            <div className="space-y-4 font-body">
              <div className="flex gap-4 items-start">
                <span className="bg-background2 md:bg-background1 text-background1 md:text-background2 font-bold px-2 py-1">1</span>
                <p><span className="font-bold">QR Inteligente:</span> Tus clientes escanean el código de la mesa y acceden al menú al instante.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-background2 md:bg-background1 text-background1 md:text-background2 font-bold px-2 py-1">2</span>
                <p><span className="font-bold">Pedidos en Tiempo Real:</span> La orden llega a la cocina mediante Socket.io sin retrasos.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-background2 md:bg-background1 text-background1 md:text-background2 font-bold px-2 py-1">3</span>
                <p><span className="font-bold">Gestión de Stock:</span> El sistema descuenta automáticamente los ingredientes según la receta.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-background2 md:bg-background1 text-background1 md:text-background2 font-bold px-2 py-1">4</span>
                <p><span className="font-bold">Cierre de Cuenta:</span> El cajero marca como pagado y la mesa se libera automáticamente.</p>
              </div>
            </div>
          </div>
        );
      case 'licencia':
        return (
          <div className="flex flex-col gap-6 text-foreground1 md:text-foreground2 animate-in zoom-in-95 duration-500">
            <h3 className="text-3xl font-semibold font-heading tracking-tight underline decoration-background2 md:decoration-background1 underline-offset-8">Licencia de Uso</h3>
            <div className="space-y-5 font-body">
              <div className="bg-foreground1/5 md:bg-foreground2/5 p-6 border border-foreground1/10 md:border-foreground2/10">
                <h4 className="text-2xl font-bold text-background2 md:text-background1 mb-2">Pago Único, Para Siempre</h4>
                <p className="text-lg opacity-90 leading-relaxed">
                  Caffy v1.x se adquiere bajo una licencia de pago único. Sin cargos recurrentes, sin cuotas de mantenimiento y con control absoluto de tus datos.
                </p>
              </div>
              <ul className="space-y-3 opacity-90">
                <li className="flex gap-2">✓ Dispositivos ilimitados en red local.</li>
                <li className="flex gap-2">✓ Actualizaciones gratuitas de por vida.</li>
                <li className="flex gap-2">✓ Soporte técnico prioritario.</li>
              </ul>
            </div>
          </div>
        );
      case 'faq':
        return (
          <div className="flex flex-col h-full text-foreground1 md:text-foreground2 animate-in zoom-in-95 duration-500 overflow-hidden">
            <h3 className="text-3xl font-semibold font-heading tracking-tight underline decoration-background2 md:decoration-background1 underline-offset-8 shrink-0 mt-4 mb-4 md:mt-0">Preguntas Frecuentes</h3>
            
            <div className="flex-1 overflow-y-auto pr-4 pb-8 space-y-5 scrollbar-thin md:scrollbar-thumb-background1/20 scrollbar-thumb-background2/20 scrollbar-track-transparent">
              <div>
                <h4 className="font-bold text-background2 md:text-background1 mb-1">¿Qué equipo de hardware necesito?</h4>
                <p className="opacity-90 italic text-sm">Un PC o laptop que hará de servidor principal en la caja, y cualquier router estándar WiFi. Los meseros y clientes usan sus propios celulares, por lo que ahorras en comandas.</p>
              </div>
              <div>
                <h4 className="font-bold text-background2 md:text-background1 mb-1">¿Los clientes tienen que instalar una App?</h4>
                <p className="opacity-90 italic text-sm">Por supuesto que no. Los clientes solo escanean un código QR impreso en su mesa con la cámara nativa de sus teléfonos y el menú web se abre instantáneamente en su propio navegador.</p>
              </div>
              <div>
                <h4 className="font-bold text-background2 md:text-background1 mb-1">¿Qué pasa si me quedo sin internet?</h4>
                <p className="opacity-90 italic text-sm">Caffy funciona de forma 100% nativa en la red WiFi de tu local. Si se te cae o no pagas tu internet, el sistema, la caja y los meseros seguirán despachando sin ningún problema.</p>
              </div>
              <div>
                <h4 className="font-bold text-background2 md:text-background1 mb-1">¿Es díficil ingresar mi menú al sistema?</h4>
                <p className="opacity-90 italic text-sm">Contamos con un panel limpio e intuitivo, donde en pocos clics puedes definir el nombre, precio, subir una foto, y seleccionar la receta que se descontará automáticamente de la sección del almacén.</p>
              </div>
              <div>
                <h4 className="font-bold text-background2 md:text-background1 mb-1">¿Hay cobros mensuales o costos por transacción?</h4>
                <p className="opacity-90 italic text-sm">Ninguno. Manejamos una estricta política de licencia de pago único. Compras el derecho de la versión v1.x, descargas los archivos fuente y es tuyo de por vida, sin comisiones sorpresa.</p>
              </div>
            </div>
          </div>
        );
      case 'inicio':
      default:
        return (
          <div className="w-full h-full flex flex-col items-center justify-between py-6 md:py-8 overflow-hidden">
            {/* Title Display */}
            <div className="w-full text-center z-10 px-4 mt-8 md:mt-0">
              <h3 className="text-[32px] md:text-4xl font-semibold text-foreground1 md:text-foreground2 font-heading tracking-tight leading-tight">
                {CAROUSEL_IMAGES[currentImageIndex].title}
              </h3>
            </div>

            {/* Image Display */}
            <div className="w-full flex-1 relative flex items-center justify-center my-6 md:my-8 px-2 md:px-0">
              {CAROUSEL_IMAGES.map((img, index) => (
                <img 
                  key={img.src}
                  src={img.src} 
                  alt={img.title} 
                  onClick={() => setIsModalOpen(true)}
                  className={`absolute max-h-full max-w-full object-contain shadow-lg transition-all duration-700 ease-in-out cursor-zoom-in ${
                  index === currentImageIndex 
                    ? 'opacity-100 translate-y-0 blur-0' 
                    : 'opacity-0 translate-y-4 blur-sm pointer-events-none'
                }`}
                />
              ))}
            </div>

            {/* Description Text */}
            <div className="w-full text-center z-10 px-6 min-h-[4rem] flex items-center justify-center mb-6">
              <p className="text-sm md:text-base text-foreground1/80 md:text-foreground2/80 font-body leading-relaxed max-w-[500px]">
                {CAROUSEL_IMAGES[currentImageIndex].desc}
              </p>
            </div>

            {/* Indicators */}
            <div className="flex gap-3 z-10">
              {CAROUSEL_IMAGES.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 transition-all duration-500 ${
                    index === currentImageIndex ? 'bg-background2 md:bg-background1 w-8' : 'bg-background2/40 md:bg-background1/40 hover:bg-background2/60 md:hover:bg-background1/60 w-2'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[100dvh] md:min-h-screen w-full relative font-body overflow-hidden">
      
      {/* Global Title for Mobile (Allows Caffy to float over the green background in all tabs) */}
      <h1 className="md:hidden absolute top-3 left-9/20 -translate-x-1/2 text-[60px] font-light text-foreground2 font-script z-20">Caffy</h1>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background2/95 backdrop-blur-md animate-in fade-in zoom-in duration-300 pointer-events-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute top-4 w-full text-center px-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground2 font-heading tracking-tight">
              {CAROUSEL_IMAGES[currentImageIndex].title}
            </h3>
          </div>
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-foreground2 hover:text-background1 transition-colors z-[110] p-2"
            onClick={() => setIsModalOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <img 
            src={CAROUSEL_IMAGES[currentImageIndex].src} 
            alt={CAROUSEL_IMAGES[currentImageIndex].title} 
            className="max-w-[95%] md:max-w-[90%] max-h-[70%] md:max-h-[80%] object-contain shadow-2xl border-2 border-background1/20"
          />
        </div>
      )}

      {/* Left side: Information (Takes full screen on mobile if activeTab === 'inicio') */}
      <div className={`${activeTab === 'inicio' ? 'flex' : 'hidden'} md:flex items-center justify-center md:justify-end bg-background2 w-full md:w-1/2 relative py-8 pb-[80px] px-4 md:px-0 md:py-0 md:pb-0 h-[100dvh] md:min-h-screen`}>
        <h1 className="hidden md:block absolute md:top-2 md:left-6 md:translate-x-0 md:text-6xl sm:text-10xl font-light text-foreground2 font-script z-20">Caffy</h1>
        
        <div className="flex flex-col justify-center py-6 px-6 md:py-10 md:px-12 bg-background1 w-[90%] md:w-[92%] h-auto max-h-[72vh] md:h-[75%] shadow-2xl border border-background1/10 transition-all duration-300 mt-12 md:mt-0">

          <h2 className="text-2xl md:text-5xl font-bold text-foreground1 leading-tight md:leading-[1.1] font-heading tracking-tight mb-4 md:mb-8 text-center md:text-left">
            Control total para<br className="hidden md:block"/> tu cafetería.
          </h2>

          <div className="space-y-4 mb-6 md:space-y-6 md:mb-10 text-center md:text-left">
            <p className="text-base md:text-xl font-medium leading-relaxed text-foreground1 opacity-90 mx-auto md:mx-0 max-w-[95%] md:max-w-[90%]">
              El sistema de Punto de Venta (POS) definitivo con menú QR, monitor de cocina, pedidos en tiempo real y gestión de inventario automático.
            </p>
            <p className="hidden md:block text-base md:text-lg font-normal leading-relaxed text-foreground1/70 mx-auto md:mx-0 max-w-[95%] md:max-w-[90%]">
              Funciona 100% en tu red local: sin caídas de conexión, sin lentitud y sin suscripciones mensuales. La herramienta que tu negocio merece.
            </p>
          </div>

          {/* Mobile: Stacked text buttons */}
          <div className="flex md:hidden flex-col gap-3 items-center w-full">
            <button 
              className="w-full bg-background2 text-foreground2 px-6 py-2.5 transition-colors cursor-pointer border border-background2 font-bold hover:bg-background1 hover:text-background2"
              onClick={() => window.open('https://wa.me/5356659558', '_blank')}
            >
              Contacto
            </button>
            <button 
              className="w-full bg-background2 text-foreground2 px-6 py-2.5 transition-colors cursor-pointer border border-foreground1 font-bold hover:bg-background1 hover:text-background2 hover:border-background2"
              onClick={() => window.open('https://mega.nz/file/07owHADb#HkRabrj3PFlBj1uxrL14NCPh3S7HSzRho-oikQ-0ctE', '_blank')}
            >
              Descargar v1.0.0
            </button>
          </div>

          {/* Desktop: Full text buttons */}
          <div className="hidden md:flex flex-row gap-4 items-center justify-between">
            <button className="bg-background2 text-foreground2 px-8 py-3 transition-colors cursor-pointer border-1 border-background2 font-bold hover:bg-background1 hover:text-background2" onClick={() => window.open('https://wa.me/5356659558', '_blank')}>
              Contacto
            </button>
            <button className="bg-background2 text-foreground2 px-8 py-3 hover:opacity-90 transition-colors cursor-pointer border-1 border-foreground1 font-bold hover:bg-background1 hover:text-background2 hover:border-background2" onClick={() => window.open('https://mega.nz/file/07owHADb#HkRabrj3PFlBj1uxrL14NCPh3S7HSzRho-oikQ-0ctE', '_blank')}>
              Descargar v1.0.0
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Dynamic Content and Navigation (Takes full screen on mobile if activeTab !== 'inicio') */}
      <div className={`${activeTab !== 'inicio' ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center justify-center md:justify-start bg-background2 md:bg-background1 w-full md:w-1/2 relative py-8 pb-[80px] px-4 md:px-0 md:py-0 md:pb-0 h-[100dvh] md:min-h-screen`}>
        <div className="md:absolute md:top-6 w-full z-20 px-4 md:px-8 hidden md:block">
          <nav className="flex flex-wrap gap-3 md:gap-8 items-center justify-center w-full">
            <button 
              onClick={() => setActiveTab('caracteristicas')}
              className={`font-semibold text-xs md:text-sm transition-all whitespace-nowrap px-2 py-1 ${activeTab === 'caracteristicas' ? 'bg-background2 text-foreground2' : 'text-foreground1/60 hover:text-foreground1'}`}
            >
              Características
            </button>
            <button 
              onClick={() => setActiveTab('como')}
              className={`font-semibold text-xs md:text-sm transition-all whitespace-nowrap px-2 py-1 ${activeTab === 'como' ? 'bg-background2 text-foreground2' : 'text-foreground1/60 hover:text-foreground1'}`}
            >
              ¿Cómo funciona?
            </button>
            <button 
              onClick={() => setActiveTab('licencia')}
              className={`font-semibold text-xs md:text-sm transition-all whitespace-nowrap px-2 py-1 ${activeTab === 'licencia' ? 'bg-background2 text-foreground2' : 'text-foreground1/60 hover:text-foreground1'}`}
            >
              Licencia
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`font-semibold text-xs md:text-sm transition-all whitespace-nowrap px-2 py-1 ${activeTab === 'faq' ? 'bg-background2 text-foreground2' : 'text-foreground1/60 hover:text-foreground1'}`}
            >
              FAQ
            </button>
            {activeTab !== 'image' && (
               <button 
                 onClick={() => setActiveTab('image')}
                 className="font-semibold text-xs md:text-sm transition-all text-foreground1/60 hover:text-foreground1 whitespace-nowrap px-2 py-1"
               >
                 Ver Demo
               </button>
            )}
          </nav>
        </div>

        <div className="flex w-[90%] md:w-[92%] items-center justify-center h-[68vh] md:h-[75%] md:py-6 px-4 md:px-10 bg-background1 md:bg-background2 shadow-2xl md:shadow-xl border border-background1/10 md:border-background2/10 relative overflow-hidden transition-all duration-300 mt-[60px] md:mt-0">
          {renderDynamicContent()}
        </div>

        <p className="absolute bottom-4 right-4 md:right-8 text-foreground1 text-[10px] md:text-xs font-light opacity-60 hidden md:block">
          © {new Date().getFullYear()} Caffy - Punto de Venta Local.
        </p>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-background2/95 backdrop-blur-md border-t border-background1/10 flex justify-between items-center px-1 py-3 z-[60] shadow-[0_-4px_15px_rgba(0,0,0,0.3)] overflow-x-auto">
        <button onClick={() => setActiveTab('inicio')} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === 'inicio' ? 'text-background1' : 'text-background1/40'}`}>
          <HomeIcon className="w-5 h-5" />
          <span className="text-[9px] font-bold">Inicio</span>
        </button>
        <button onClick={() => setActiveTab('image')} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === 'image' ? 'text-background1' : 'text-background1/40'}`}>
          <MonitorPlay className="w-5 h-5" />
          <span className="text-[9px] font-bold">Demo</span>
        </button>
        <button onClick={() => setActiveTab('caracteristicas')} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === 'caracteristicas' ? 'text-background1' : 'text-background1/40'}`}>
          <Star className="w-5 h-5" />
          <span className="text-[9px] font-bold">Detalles</span>
        </button>
        <button onClick={() => setActiveTab('como')} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === 'como' ? 'text-background1' : 'text-background1/40'}`}>
          <Info className="w-5 h-5" />
          <span className="text-[9px] font-bold">Uso</span>
        </button>
        <button onClick={() => setActiveTab('licencia')} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === 'licencia' ? 'text-background1' : 'text-background1/40'}`}>
          <ShieldCheck className="w-5 h-5" />
          <span className="text-[9px] font-bold">Licencia</span>
        </button>
        <button onClick={() => setActiveTab('faq')} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === 'faq' ? 'text-background1' : 'text-background1/40'}`}>
          <HelpCircle className="w-5 h-5" />
          <span className="text-[9px] font-bold">FAQ</span>
        </button>
      </div>
    </div>
  );
}