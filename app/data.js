import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export const NavLinks = [
  {
    id: 1,
    name: 'الرئيسية',
    url: '/',
  },
  {
    id: 2,
    name: 'خدمات',
    url: '/services',
  },
  {
    id: 3,
    name: 'حول شركتنا',
    url: '/about',
  },
  {
    id: 4,
    name: 'المدونة',
    url: '/blog',
  },
  {
    id: 5,
    name: 'الاتصال',
    url: '/contact',
  },
]

export const SiteInfo = {
  title: 'شركه السلام لنقل العفش بجده',
  description:
    'شركة السالم لنقل العفش هي شركة معروفة بجودة خدماتها في نقل الأثاث والأغراض المنزلية والتجارية داخل مدينة جدة. تقدم الشركة حلولاً شاملة لعمليات النقل والتخزين بطريقة آمنة وسريعة.',
  fullDescription:
    'شركة السلام لنقل العفش هي واحدة من أبرز الشركات المتخصصة في نقل الأثاث والمنقولات داخل مدينة جدة. تتميز الشركة بفريق عمل مدرب على التعامل بحرفية مع القطع الثمينة والكبيرة الحجم. كما توفر خدمات التغليف والتخزين المؤقت في مرافق آمنة ونظيفة. وتحرص الشركة على تقديم أعلى مستويات الجودة والسرعة لضمان رضا عملائها من الأفراد والشركات.',
  heroImage: '/images/hero.webp',
  mobileNumber: '00966593799388',
  whatsappNumber: '966554627716',
}

export const ServicesList = [
  {
    id: 1,
    link: '/',
    title: 'نقل الاثاث داخل جدة',
    image: '/images/001.jpeg',
    description:
      'شركة نقل اثاث بجدة أحد أنواع الشركات الخدمية المهمة التي ظهرت في الآونة الأخيرة والسبب في ذلك هو صعوبة نقل العفش بجدة',
  },
  {
    id: 2,
    link: '/',
    title: 'فك وتركيب وتغليف الاثاث    ',
    image: '/images/2.jpeg',
    description:
      'عملية فك و تركيب الأثاث لدى شركه خليج جدة بالاعتماد على فنيين و عمال  لفك و تركيب الأثاث يعمل كل منهم في أكثر من مجال النجاره , فني تكييفات , كهربائي',
  },
  {
    id: 3,
    link: '/',
    title: 'تخزين الاثاث',
    image: '/images/3.jpeg',
    description:
      'تمتلك شركة خليج جدة العديد من الإمكانيات لتخزين العفش في المخازن المجهزة بأحدث الإمكانيات من أجل الحفاظ على العفش من الغبار والرطوبة التي تتعرض لها عند نزول الأمطار.',
  },
]

export const MapShareLinks = [
  {
    id: 1,
    title: 'Google',
    url: 'https://google.com',
    image: '/images/google_map_white_small.webp',
  },
  {
    id: 2,
    title: 'Waze',
    url: 'https://waze.com',
    image: '/images/waze_white_small.webp',
  },
  {
    id: 3,
    title: 'Moovit',
    url: 'https://moovit.com',
    image: '/images/moovit_white_small.webp',
  },
]

export const SocialShareLinks = [
  {
    id: 1,
    title: 'Facebook',
    url: 'https://facebook.com',
    icon: faFacebookF,
  },
  {
    id: 2,
    title: 'Twitter',
    url: 'https://twitter.com',
    icon: faTwitter,
  },
  {
    id: 3,
    title: 'Instagram',
    url: 'https://instagram.com',
    icon: faInstagram,
  },
]

export const ContactInfo = [
  {
    id: 1,
    name: 'الواتساب',
    href: `https://wa.me/${SiteInfo.whatsappNumber}`,
    icon: faWhatsapp,
    text: `00${SiteInfo.whatsappNumber}`,
  },
  {
    id: 2,
    name: 'الهاتف',
    href: `tel:${SiteInfo.mobileNumber}`,
    icon: faPhone,
    text: `${SiteInfo.mobileNumber}`,
  },
]

export const AboutCompany = [
  {
    id: 1,
    title:
      'فك وتركيب جميع انواع الأثاث المنزلي والمكتبي، فك وتركيب جميع انواع غرف النوم (غرف امريكي، غرف إيطالي، غرف تركي، غرف ماليزي، غرف صيني، غرف ايكيا، غرف وطني), فك وتركيب المكيفات الاسبلت والشباك بأيدي فنين متخصصون في مجال التبريد والتكيف, فك وتركيب المطابخ الجاهزه والتفصيل بأيدي فنين محترفين وعمالة مدربه علي المحافظة على الأثاث من اي اضرار او خدوش',
  },
  {
    id: 2,
    title:
      'يوجد لدينا جميع انواع السيارات الكبيره والصغيره لتلبية احتياجات العميل لنقل كافة الأغراض بكل سهوله ويسر وأمان, متواجدين في جميع أحياء جدة (شمال جدة، جنوب جدة، شرق جدة، غرب جدة)',
  },

  {
    id: 3,
    title: `يوجد لدينا توصيل للجمعيات الخيريه بسعر مخفض, كما يوجد لدينا خدمه للتخلص من العفش التالف بسعر مناسب جدا, اتصل نصل جوال واتساب  خدمة 24 ساعه على مدار الاسبوع ${SiteInfo.mobileNumber} و ${SiteInfo.whatsappNumber}`,
  },
]

export const BlogList = [
  {
    id: 1,
    title: 'خدمة نقل الأثاث المنزلي',
    description:
      'توفر شركتنا خدمة نقل الأثاث المنزلي بأمان وكفاءة. فريقنا المدرب على التعامل مع الأثاث بحرفية سيضمن سلامة نقل جميع قطع الأثاث إلى وجهتك الجديدة. كما نوفر خدمات التفكيك والتركيب لضمان إعادة تركيب الأثاث بالشكل المطلوب.',
    image: '/images/002.jpeg',
    link: '/',
  },
  {
    id: 2,
    title: 'تغليف وتخزين الأثاث',
    description:
      'نقدم خدمة تغليف الأثاث باستخدام مواد التغليف المناسبة لحماية القطع من الخدش والتلف. كما يمكننا توفير خدمات التخزين المؤقت في مستودعات آمنة ونظيفة إلى أن يحين موعد نقل الأثاث إلى وجهتك الجديدة.',
    image: '/images/003.jpeg',
    link: '/',
  },
  {
    id: 3,
    title: 'نقل الأثاث المكتبي والتجاري',
    description:
      'لدينا فريق متخصص في نقل الأثاث المكتبي والتجاري بكفاءة عالية. نوفر خدمات التفكيك والتركيب والتغليف للحفاظ على سلامة المعدات والأجهزة أثناء النقل. كما نقدم خدمات التخزين المؤقت حسب احتياجات عملائنا.',
    image: '/images/004.jpeg',
    link: '/',
  },
  {
    id: 4,
    title: 'خدمات نقل الأثاث البيانو والقطع الكبيرة',
    description:
      'نمتلك الخبرة والمعدات اللازمة لنقل البيانو والقطع الكبيرة الحجم بأمان. سيتولى فريقنا المُدرَّب عملية الفك والتغليف والنقل بعناية فائقة لضمان وصول الأثاث إلى وجهته دون أي أضرار.',
    image: '/images/005.jpeg',
    link: '/',
  },
]
export const ImagesGallery = [
  {
    id: 1,
    image: '/images/001.jpeg',
  },
  {
    id: 2,
    image: '/images/002.jpeg',
  },
  {
    id: 3,
    image: '/images/003.jpeg',
  },
  {
    id: 4,
    image: '/images/004.jpeg',
  },
  {
    id: 5,
    image: '/images/005.jpeg',
  },
  {
    id: 6,
    image: '/images/006.jpeg',
  },
  {
    id: 7,
    image: '/images/007.jpeg',
  },
  {
    id: 8,
    image: '/images/008.jpeg',
  },
  {
    id: 9,
    image: '/images/009.jpeg',
  },
  {
    id: 10,
    image: '/images/010.jpeg',
  },
  {
    id: 11,
    image: '/images/011.jpeg',
  },
  {
    id: 12,
    image: '/images/012.jpeg',
  },
  {
    id: 13,
    image: '/images/013.jpeg',
  },
  {
    id: 14,
    image: '/images/014.jpeg',
  },
  {
    id: 15,
    image: '/images/015.jpeg',
  },
  {
    id: 16,
    image: '/images/016.jpeg',
  },
  {
    id: 17,
    image: '/images/017.jpeg',
  },
  {
    id: 18,
    image: '/images/018.jpeg',
  },
]
