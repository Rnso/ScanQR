import { observable } from 'mobx'

const store = observable({
  show_product_details: false,
  show_menu: false,
  show_cart: false,
  show_scanner: false,
  show_results: false,
  selected_id: '',
  selected_title: '',
  selected_authors: '',
  selected_publisher: '',
  selected_image: '',
  selected_info: '',
  selected_date: '',
  selected_desc: '',
  selected_price: '',
  cart_items: [],
  cart_items_count: 0,
  grand_total: 0,
  sub_total: 0,
  shipping_charges: 0,
  items: [
    {
      id: 'lXdee8d4WFEC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/lXdee8d4WFEC',
      title: 'Design',
      authors: 'Thomas Hauffe',
      publisher: 'Laurence King Publishing',
      publishedDate: '1998-01-01',
      description:
        "Aiming to place design developments in their broader context, this text describes the history of design from its emergence as a separate discipline around 1750 to the present. Arranged chronologically, and with colour-coded pages for ease of reference, the book includes time-lines and designers' biographies, as well as feature spreads on notable designers and companies. There is also a detailed list of major design museums and collections.",
      pageCount: 192,
      price: 100,
      imageLinks: 'https://i.imgur.com/e3Umi31.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=lXdee8d4WFEC&printsec=frontcover&dq=%27design%27&hl=&cd=1&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=lXdee8d4WFEC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink: 'https://books.google.com/books/about/Design.html?hl=&id=lXdee8d4WFEC',
      searchInfo: {
        textSnippet:
          'Aiming to place design developments in their broader context, this text describes the history of design from its emergence as a separate discipline around 1750 to the present.',
      },
    },
    {
      id: 'UAZpAwAAQBAJ',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/UAZpAwAAQBAJ',
      title: 'Thoughts on Design',
      authors: 'Paul Rand',
      publisher: 'Chronicle Books',
      publishedDate: '2014-08-19',
      description:
        "One of the seminal texts of graphic design, Paul Rand's Thoughts on Design is now available for the first time since the 1970s. Writing at the height of his career, Rand articulated in his slender volume the pioneering vision that all design should seamlessly integrate form and function. This facsimile edition preserves Rand's original 1947 essay with the adjustments he made to its text and imagery for a revised printing in 1970, and adds only an informative and inspiring new foreword by design luminary Michael Bierut. As relevant today as it was when first published, this classic treatise is an indispensable addition to the library of every designer.",
      pageCount: 96,
      price: 50,
      imageLinks: 'https://i.imgur.com/er1paxZ.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=UAZpAwAAQBAJ&printsec=frontcover&dq=%27design%27&hl=&cd=2&source=gbs_api',
      infoLink: 'https://play.google.com/store/books/details?id=UAZpAwAAQBAJ&source=gbs_api',
      canonicalVolumeLink: 'https://market.android.com/details?id=book-UAZpAwAAQBAJ',
      searchInfo: {
        textSnippet:
          'One of the seminal texts of graphic design, Paul Rand&#39;s Thoughts on Design is now available for the first time since the 1970s.',
      },
    },
    {
      id: 'WBlUgKhMbdsC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/WBlUgKhMbdsC',
      title: 'Visual Thinking',
      subtitle: 'for Design',
      authors: 'Colin Ware',
      publisher: 'Elsevier',
      publishedDate: '2010-07-27',
      description:
        'Visual Thinking brings the science of perception to the art of design. Designers increasingly need to present information in ways that aid their audience’s thinking process. Fortunately, results from the relatively new science of human visual perception provide valuable guidance. In this book, Colin Ware takes what we now know about perception, cognition, and attention and transforms it into concrete advice that designers can directly apply. He demonstrates how designs can be considered as tools for cognition – extensions of the viewer’s brain in much the same way that a hammer is an extension of the user’s hand. The book includes hundreds of examples, many in the form of integrated text and full-color diagrams. Experienced professional designers and students alike will learn how to maximize the power of the information tools they design for the people who use them. Presents visual thinking as a complex process that can be supported in every stage using specific design techniques Provides practical, task-oriented information for designers and software developers charged with design responsibilities Includes hundreds of examples, many in the form of integrated text and full-color diagrams Steeped in the principles of “active vision, which views graphic designs as cognitive tools',
      pageCount: 256,
      price: 120,
      imageLinks: 'https://i.imgur.com/O1o6VEd.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=WBlUgKhMbdsC&printsec=frontcover&dq=%27design%27&hl=&cd=3&source=gbs_api',
      infoLink: 'https://play.google.com/store/books/details?id=WBlUgKhMbdsC&source=gbs_api',
      canonicalVolumeLink: 'https://market.android.com/details?id=book-WBlUgKhMbdsC',
      searchInfo: {
        textSnippet:
          'In this book, Colin Ware takes what we now know about perception, cognition, and attention and transforms it into concrete advice that designers can directly apply.',
      },
    },
    {
      id: 'I_NX1Qnz-1QC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/I_NX1Qnz-1QC',
      title: 'Design for Services',
      authors: 'Dr Anna Meroni & Dr Daniela Sangiorgi',
      publisher: 'Gower Publishing, Ltd.',
      publishedDate: '2012-09-28',
      description:
        "In Design for Services, Anna Meroni and Daniela Sangiorgi articulate what Design is doing and can do for services, and how this connects to existing fields of knowledge and practice. Designers previously saw their task as the conceptualisation, development and production of tangible objects. In the twenty-first century, a designer rarely 'designs something' but rather 'designs for something': in the case of this publication, for change, better experiences and better services. The authors reflect on this recent transformation in the practice, role and skills of designers, by organising their book into three main sections. The first section links Design for Services to existing models and studies on services and service innovation. Section two presents multiple service design projects to illustrate and clarify the issues, practices and theories that characterise the discipline today; using these case studies the authors propose a conceptual framework that maps and describes the role of designers in the service economy. The final section projects the discipline into the emerging paradigms of a new economy to initiate a reflection on its future development.",
      pageCount: 298,
      price: 59.99,
      imageLinks: 'https://i.imgur.com/ujlz103.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=I_NX1Qnz-1QC&printsec=frontcover&dq=%27design%27&hl=&cd=4&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=I_NX1Qnz-1QC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Design_for_Services.html?hl=&id=I_NX1Qnz-1QC',
      searchInfo: {
        textSnippet:
          'In Design for Services, Anna Meroni and Daniela Sangiorgi articulate what Design is doing and can do for services, and how this connects to existing fields of knowledge and practice.',
      },
    },
    {
      id: 'XG9JdhKdZMkC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/XG9JdhKdZMkC',
      title: 'Design and Analysis',
      authors: 'Bernard Leupen',
      publisher: '010 Publishers',
      publishedDate: '1997',
      pageCount: 224,
      price: 249.99,
      imageLinks: 'https://i.imgur.com/xOIH1ce.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=XG9JdhKdZMkC&printsec=frontcover&dq=%27design%27&hl=&cd=5&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=XG9JdhKdZMkC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Design_and_Analysis.html?hl=&id=XG9JdhKdZMkC',
    },
    {
      id: '5hxqRkf4znkC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/5hxqRkf4znkC',
      title: 'Design: A Very Short Introduction',
      authors: 'John Heskett',
      publisher: 'Oxford University Press',
      publishedDate: '2005',
      pageCount: 148,
      price: 99.99,
      imageLinks: 'https://i.imgur.com/CO3E2kU.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=5hxqRkf4znkC&printsec=frontcover&dq=%27design%27&hl=&cd=6&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=5hxqRkf4znkC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Design_A_Very_Short_Introduction.html?hl=&id=5hxqRkf4znkC',
      searchInfo: {
        textSnippet:
          'This book will transform the way you think about design by showing how integral it is to our daily lives, from the spoon we use to eat our breakfast cereal to the medical equipment used to save lives.',
      },
    },
    {
      id: 'mulIjYDbWTEC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/mulIjYDbWTEC',
      title: 'Basics of Design',
      subtitle: 'Layout and Typography for Beginners',
      authors: 'Lisa Graham',
      publisher: 'Cengage Learning',
      publishedDate: '2002',
      description:
        'This heavily illustrated guide is ideal for those with little or no graphic design or art background who need to create first-rate visual page designs. Its unique conversational tone and "before and after" examples provide everything needed to create professional quality work.',
      pageCount: 280,
      price: 150,
      imageLinks: 'https://i.imgur.com/k4TC8f8.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=mulIjYDbWTEC&printsec=frontcover&dq=%27design%27&hl=&cd=7&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=mulIjYDbWTEC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Basics_of_Design.html?hl=&id=mulIjYDbWTEC',
      searchInfo: {
        textSnippet:
          'This heavily illustrated guide is ideal for those with little or no graphic design or art background who need to create first-rate visual page designs.',
      },
    },
    {
      id: '0-eYAn4TwygC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/0-eYAn4TwygC',
      title: 'The Culture of Design',
      authors: 'Guy Julier',
      publisher: 'SAGE',
      publishedDate: '2007-11-20',
      description:
        "Praise for the first edition: `Julier provides an important contemporary account of how design disciplines act and interact in the world.... an important resource for the student of design... perfection as a cultural studies text' - European Journal of Cultural Studies Aimed at students of design studies, design history, cultural studies and sociology, The Culture of Design, offers a unique overview of design practice in contemporary culture and society. Drawing on a range of theoretical perspectives, Julier nevertheless foregrounds the everyday business and professional context in which designers work. The second edition of The Culture of Design, has been thoroughly revised and updated, and contains new case studies, including one on the iPod. In addition, the book now has a new introductory chapter that outlines academic approaches to 'design culture' and an extended final chapter which looks at the links between design and management studies and how the creative industries function in the context of urban regeneration and social participation.",
      pageCount: 256,
      price: 29.99,
      imageLinks: 'https://i.imgur.com/0q9f1JQ.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=0-eYAn4TwygC&printsec=frontcover&dq=%27design%27&hl=&cd=8&source=gbs_api',
      infoLink: 'https://play.google.com/store/books/details?id=0-eYAn4TwygC&source=gbs_api',
      canonicalVolumeLink: 'https://market.android.com/details?id=book-0-eYAn4TwygC',
      searchInfo: {
        textSnippet:
          'Praise for the first edition: `Julier provides an important contemporary account of how design disciplines act and interact in the world.... an important resource for the student of design... perfection as a cultural studies text&#39; - ...',
      },
    },
    {
      id: 'uZ8uzWAcdxEC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/uZ8uzWAcdxEC',
      title: 'Universal Methods of Design',
      subtitle:
        '100 Ways to Research Complex Problems, Develop Innovative Ideas, and Design Effective Solutions',
      authors: 'Bella Martin, Bruce Hanington & Bruce M. Hanington',
      publisher: 'Rockport Pub',
      publishedDate: '2012-02',
      description:
        'This comprehensive reference provides a thorough and critical presentation of 100 research methods, synthesis/analysis techniques, and research deliverables for human centered design, delivered in a concise and accessible format perfect for designers, educators, and students. Whether research is already an integral part of a practice or curriculum, or whether it has been unfortunately avoided due to perceived limitations of time, knowledge, or resources, Universal Methods of Design serves as an invaluable compendium of methods that can be easily referenced and utilized by cross-disciplinary teams in nearly any design project. This essential guide: Dismantles the myth that user research methods are complicated, expensive, and time-consuming. Creates a shared meaning for cross-disciplinary design teams. llustrates methods with compelling visualizations and case studies. Characterizes each method at a glance. Indicates when methods are best employed to help prioritize appropriate design research strategies. Universal Methods of Design distills each method down to its most powerful essence, in a format that will help design teams select and implement the most credible research methods best suited to their design culture within the constraints of their projects.',
      pageCount: 207,
      price: 250,
      imageLinks: 'https://i.imgur.com/6MCEKOB.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=uZ8uzWAcdxEC&printsec=frontcover&dq=%27design%27&hl=&cd=9&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=uZ8uzWAcdxEC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Universal_Methods_of_Design.html?hl=&id=uZ8uzWAcdxEC',
      searchInfo: {
        textSnippet:
          'This essential guide: Dismantles the myth that user research methods are complicated, expensive, and time-consuming.',
      },
    },
    {
      id: 'ODUhus_1xL4C',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/ODUhus_1xL4C',
      title: 'An Introduction to Design and Culture',
      subtitle: '1900 to the Present',
      authors: 'Penny Sparke',
      publisher: 'Routledge',
      publishedDate: '2013',
      description:
        'This third edition of An Introduction to Design and Culture has been revised and updated throughout to include issues of globalization, sustainability and digital/interactive design. New for this edition is a chapter which covers key changes in design culture. Design culture has changed dramatically in the 21st century, the designer-hero is now much less in evidence and design has become much more interdisciplinary. Drawing on a wealth of mass-produced artefacts, images and environments including sewing machines, cars, televisions, clothes, electronic and branded goods and exhibitions, author Penny Sparke shows how design has helped to shape and reflect our social and cultural development. This introduction to the development of modern (and postmodern) design is ideal for undergraduate students.',
      pageCount: 262,
      price: 299.99,
      imageLinks: 'https://i.imgur.com/OJ5Etax.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=ODUhus_1xL4C&printsec=frontcover&dq=%27design%27&hl=&cd=10&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=ODUhus_1xL4C&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/An_Introduction_to_Design_and_Culture.html?hl=&id=ODUhus_1xL4C',
      searchInfo: {
        textSnippet:
          'This third edition of An Introduction to Design and Culture has been revised and updated throughout to include issues of globalization, sustainability and digital/interactive design.',
      },
    },
    {
      id: 'xsHsnIUPGw0C',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/xsHsnIUPGw0C',
      title: 'Interior Design and Identity',
      authors: 'Susie McKellar & Penny Sparke',
      publisher: 'Manchester University Press',
      publishedDate: '2004-11-27',
      description:
        "This fascinating collection provides a chronologically arranged set of case studies looking at how interior design has constantly redefined itself as a manifestation of culture, from the eighteenth century to the present day. The book looks at the amateur activities of female 'home makers' in search of creative outlets and married couples seeking to modernise their homes, as well as the contributions of early professional (female) 'interior decorators', and later (male) 'interior designers'. It also considers the more anonymous role of commercial enterprises, such as hairdressing salons, ocean-going liners or modern offices as well as public institutions such as hospitals or naval training establishments. Interior design and identity examines interior design in relation to the changing identities of its practitioners, its inhabitants and of the furnishings, focussing on the ways in which cultural values came to be embedded in the spaces which people inhabited and made their own. Issues relating to interiority, gender and the relationship of the public sphere are also considered, opening up a new level of design historical enquiry.",
      pageCount: 218,
      price: 85,
      imageLinks: 'https://i.imgur.com/nRHF5GF.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=xsHsnIUPGw0C&printsec=frontcover&dq=%27design%27&hl=&cd=11&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=xsHsnIUPGw0C&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Interior_Design_and_Identity.html?hl=&id=xsHsnIUPGw0C',
      searchInfo: {
        textSnippet:
          'This fascinating collection provides a chronologically arranged set of case studies looking at how interior design has constantly redefined itself as a manifestation of culture, from the eighteenth century to the present day.',
      },
    },
    {
      id: 'T4oGCrPWvcQC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/T4oGCrPWvcQC',
      title: 'Linear Estimation and Design of Experiments',
      authors: 'D. D. Joshi',
      publisher: 'New Age International',
      publishedDate: '1987',
      pageCount: 288,
      price: 115,
      imageLinks: 'https://i.imgur.com/pqUMTPh.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=T4oGCrPWvcQC&printsec=frontcover&dq=%27design%27&hl=&cd=12&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=T4oGCrPWvcQC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Linear_Estimation_and_Design_of_Experime.html?hl=&id=T4oGCrPWvcQC',
    },
    {
      id: 'PgKio2MSUGwC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/PgKio2MSUGwC',
      title: 'Modern Schools',
      subtitle: 'A Century of Design for Education',
      authors: 'T. Hille',
      publisher: 'John Wiley & Sons',
      publishedDate: '2011-04-04',
      pageCount: 528,
      price: 199.99,
      imageLinks: 'https://i.imgur.com/EYZPn81.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=PgKio2MSUGwC&printsec=frontcover&dq=%27design%27&hl=&cd=13&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=PgKio2MSUGwC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Modern_Schools.html?hl=&id=PgKio2MSUGwC',
      saleInfo: {
        country: 'AE',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      searchInfo: {
        textSnippet:
          'Modern Schools: A Century of Design for Education features the work of more than 60 architects worldwide, including twentieth century masters Frank Lloyd Wright, Alvar Aalto, Marcel Breuer, Le Corbusier, and Eliel and Eero Saarinen, as well ...',
      },
    },
    {
      id: 'XXIJTb7P2koC',
      etag: 'ruaq93k7JrY',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/XXIJTb7P2koC',
      title: 'Design to Cost',
      authors: 'Jack V. Michaels & William P. Wood',
      publisher: 'John Wiley & Sons',
      publishedDate: '1989-06-26',
      description:
        'How to accurately estimate, in advance, the cost of producing products or services by means of the design-to-cost method, which systematically constrains design goals according to available funds. This book shows how to use value engineering, cost estimating, and cost control to devise, and adhere to, realistic cost goals. Touches on techniques from management methods to specific engineering approaches, and provides actual case studies of projects and services that have now become affordable through the application of the design-to-cost method.',
      pageCount: 413,
      price: 45,
      imageLinks: 'https://i.imgur.com/QKldoAZ.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=XXIJTb7P2koC&printsec=frontcover&dq=%27design%27&hl=&cd=14&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=XXIJTb7P2koC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Design_to_Cost.html?hl=&id=XXIJTb7P2koC',
      searchInfo: {
        textSnippet:
          'This book shows how to use value engineering, cost estimating, and cost control to devise, and adhere to, realistic cost goals.',
      },
    },
    {
      id: 'yTypGmVTx6cC',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/yTypGmVTx6cC',
      title: 'A Text Book of Design of Electrical Installations',
      authors: 'Jain',
      publisher: 'Firewall Media',
      publishedDate: '1993-10-01',
      pageCount: 526,
      price: 500,
      imageLinks: 'https://i.imgur.com/QeCuJTO.jpg',
      language: 'en',
      previewLink:
        'http://books.google.ae/books?id=yTypGmVTx6cC&printsec=frontcover&dq=%27design%27&hl=&cd=15&source=gbs_api',
      infoLink: 'http://books.google.ae/books?id=yTypGmVTx6cC&dq=%27design%27&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_Text_Book_of_Design_of_Electrical_Inst.html?hl=&id=yTypGmVTx6cC',
    },
  ],
})
export default store
