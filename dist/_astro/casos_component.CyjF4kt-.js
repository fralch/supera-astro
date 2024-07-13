import { j as e } from './jsx-runtime.K1e75nIr.js';
import { r as t } from './index.NEDEFKed.js';
import { a as b } from './axios.Cm0UX6qg.js';
import { S as ee } from './sweetalert2.all.DleYb7kt.js';
const ne = () => {
  const [T, re] = t.useState(new Date()),
    [_, x] = t.useState(0),
    [y, u] = t.useState(!1),
    [j, h] = t.useState(''),
    [k, A] = t.useState(0),
    [F, O] = t.useState(0),
    [g, f] = t.useState(''),
    [N, G] = t.useState([]),
    [ae, C] = t.useState(N),
    [w, L] = t.useState([]),
    [c, v] = t.useState(0),
    [te, o] = t.useState(!1),
    [S, E] = t.useState(!1),
    [$, R] = t.useState(null);
  t.useState();
  const [p, D] = t.useState({ id: 0, monto_total: 0 }),
    [U, J] = t.useState([]),
    [l, i] = t.useState({
      cliente_dni: 0,
      condiciones: '',
      expediente: '',
      fiscal: '',
      materia: '',
      proceso: '-',
      mesa: '',
      contrato: 'Si',
      culminado: 0,
      fecha: new Date(),
    }),
    d = t.useRef(null);
  t.useEffect(() => {
    localStorage.getItem('userData')
      ? (console.log(JSON.parse(localStorage.getItem('userData'))),
        R(JSON.parse(localStorage.getItem('userData'))))
      : (window.location.href = '/');
  }, []),
    t.useEffect(() => {
      b.get('http://localhost:4000/casos').then((r) => {
        console.log(r.data), G(r.data), C(r.data);
        const s = z(r.data, 10);
        L(s);
      });
    }, []),
    t.useEffect(() => {
      b.get('http://localhost:4000/clientes').then((r) => {
        console.log(r.data), J(r.data);
      });
    }, []),
    t.useEffect(() => {
      let r = N.filter((n) => n.mesa === g);
      C(r), v(0);
      const s = z(r, 10);
      L(s);
    }, [g]),
    t.useEffect(() => {
      let r;
      return (
        y
          ? (r = setInterval(() => {
              x((a) => a + 100);
            }, 100))
          : clearInterval(r),
        () => {
          clearInterval(r);
        }
      );
    }, [y]);
  const z = (r, a) => {
      let s = [];
      for (let n = 0; n < Math.ceil(r.length / a); n++) {
        let m = n * a;
        s.push(r.slice(m, m + a));
      }
      return s;
    },
    W = (r, a, s, n) => {
      B(n) || E(!0), h(r), O(a), A(s);
      const P = document.getElementById('default-modal');
      P.classList.remove('hidden'),
        P.setAttribute('aria-hidden', 'false'),
        o(!0),
        d.current.classList.add('modal-open');
    },
    I = () => {
      h('');
      const r = document.getElementById('default-modal');
      r.classList.add('hidden'),
        r.setAttribute('aria-hidden', 'true'),
        o(!1),
        d.current.classList.remove('modal-open');
    },
    V = (r) => {
      h(r);
      const a = document.getElementById('modal-acto-procesal');
      a.classList.remove('hidden'),
        a.setAttribute('aria-hidden', 'false'),
        o(!0),
        d.current.classList.add('modal-open');
    },
    q = () => {
      h('');
      const r = document.getElementById('modal-acto-procesal');
      r.classList.add('hidden'),
        r.setAttribute('aria-hidden', 'true'),
        o(!1),
        d.current.classList.remove('modal-open');
    },
    H = (r) => {
      let a = new Date(r),
        s = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        };
      return a.toLocaleDateString('es-PE', s);
    },
    K = () => {
      b.post(`http://localhost:4000/casos/update/${F}`, {
        acto_procesal: j,
        culminado: k,
      }).then((r) => {
        window.location.reload();
      });
    },
    Q = (r) => {
      const a = Math.floor((r / 1e3) % 60),
        s = Math.floor((r / (1e3 * 60)) % 60);
      return `${Math.floor((r / (1e3 * 60 * 60)) % 24)
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}:${a
        .toString()
        .padStart(2, '0')}`;
    },
    M = (r) => {
      let a = new Date(),
        s = new Date(r),
        n = a.getTime() - s.getTime();
      return Math.floor(n / (1e3 * 60 * 60 * 24));
    },
    B = (r) => {
      let a = $.cargo,
        s = !1;
      return a.toLowerCase() === r.toLowerCase() && (s = !0), s;
    },
    X = () => {
      b.post('http://localhost:4000/casos', l).then((r) => {
        window.location.reload();
      });
    },
    Y = (r) => {
      console.log(r), D({ ...p, id: r });
      const a = document.getElementById('modal-upload-file');
      a.classList.remove('hidden'),
        a.setAttribute('aria-hidden', 'false'),
        o(!0),
        d.current.classList.add('modal-open');
    },
    Z = async () => {
      p.monto_total !== 0 &&
        (console.log(p),
        (await b.post('http://localhost:4000/pagos/montototal', p)) &&
          ee.fire({
            icon: 'success',
            title: 'Contrato guardado',
            showConfirmButton: !1,
            timer: 1500,
          }));
      const r = document.getElementById('modal-upload-file');
      r.classList.add('hidden'),
        r.setAttribute('aria-hidden', 'true'),
        o(!1),
        d.current.classList.remove('modal-open');
    };
  return e.jsxs('section', {
    className: '    py-2 bg-primary-980 mt-20 lg:mt-10 mx-auto',
    children: [
      e.jsx('div', {
        className:
          ' bg-gray-100 dark:bg-secondary-900 dark:text-white text-gray-600 flex overflow-hidden text-sm',
        children: e.jsx('div', {
          className: 'flex-grow overflow-hidden h-full flex flex-col',
          children: e.jsxs('div', {
            className: 'flex-grow flex overflow-x-hidden',
            ref: d,
            children: [
              e.jsxs('div', {
                className:
                  'xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5',
                children: [
                  e.jsx('div', {
                    className: 'text-xs text-gray-400 tracking-wider',
                    children: 'CASOS',
                  }),
                  e.jsxs('div', {
                    className: 'space-y-4 mt-3',
                    children: [
                      e.jsx('button', {
                        className:
                          g === 'Civil'
                            ? 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none'
                            : 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ',
                        onClick: () => f('Civil'),
                        children: e.jsxs('div', {
                          className:
                            'flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full',
                          children: [
                            e.jsx('img', {
                              src: 'https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-5.png',
                              className: 'w-7 h-7 mr-2 rounded-full',
                              alt: 'profile',
                            }),
                            e.jsx('div', {
                              className:
                                ' py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md',
                              children: 'Civil',
                            }),
                          ],
                        }),
                      }),
                      e.jsx('button', {
                        className:
                          g === 'Penal'
                            ? 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-primary-450 focus:outline-none'
                            : 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ',
                        onClick: () => f('Penal'),
                        children: e.jsxs('div', {
                          className:
                            'flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full',
                          children: [
                            e.jsx('img', {
                              src: 'https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-1.png',
                              className: 'w-7 h-7 mr-2 rounded-full',
                              alt: 'profile',
                            }),
                            e.jsx('div', {
                              className:
                                ' py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md',
                              children: 'Penal',
                            }),
                          ],
                        }),
                      }),
                      e.jsx('button', {
                        className:
                          g === 'Laboral'
                            ? 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-yellow-600 focus:outline-none'
                            : 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ',
                        onClick: () => f('Laboral'),
                        children: e.jsxs('div', {
                          className:
                            'flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full',
                          children: [
                            e.jsx('img', {
                              src: 'https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-4.png',
                              className: 'w-7 h-7 mr-2 rounded-full',
                              alt: 'profile',
                            }),
                            e.jsx('div', {
                              className:
                                'py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md',
                              children: 'Laboral',
                            }),
                          ],
                        }),
                      }),
                      e.jsx('button', {
                        className:
                          g === 'Empresa y Comunidades'
                            ? 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-red-500 focus:outline-none'
                            : 'bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ',
                        onClick: () => f('Empresa y Comunidades'),
                        children: e.jsxs('div', {
                          className:
                            'flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full',
                          children: [
                            e.jsx('img', {
                              src: 'https://kinforce.net/adwocat/wp-content/uploads/2023/06/law-icons-W55LGC-2.png',
                              className: 'w-7 h-7 mr-2 rounded-full',
                              alt: 'profile',
                            }),
                            e.jsx('div', {
                              className:
                                'py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-red-500 rounded-md',
                              children: 'Empresas',
                            }),
                          ],
                        }),
                      }),
                      e.jsx('div', {
                        className: 'flex flex-col items-center',
                        children: e.jsx('input', {
                          type: 'text',
                          className:
                            'w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                          placeholder: 'Buscar...',
                          onChange: (r) => {
                            let a = N.filter((m) =>
                              m.cliente.nombre
                                .toLowerCase()
                                .includes(r.target.value.toLowerCase())
                            );
                            C(a), v(0);
                            const n = z(a, 10);
                            L(n);
                          },
                        }),
                      }),
                      e.jsx('button', {
                        className:
                          'bg-primary-700 text-white p-2 rounded-md w-full mt-3 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-450',
                        onClick: () => {
                          i({
                            ...l,
                            cliente_dni: 0,
                            condiciones: '',
                            expediente: '',
                            fiscal: '',
                            materia: '',
                            proceso: '-',
                            mesa: '',
                            contrato: 'Si',
                            culminado: 0,
                            fecha: new Date(),
                          });
                          const r =
                            document.getElementById('modal-agregar-caso');
                          r.classList.remove('hidden'),
                            r.setAttribute('aria-hidden', 'false'),
                            o(!0),
                            d.current.classList.add('modal-open');
                        },
                        children: 'Agregar caso',
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx('div', {
                className:
                  'flex-grow bg-white dark:bg-secondary-800 overflow-y-auto',
                children: e.jsxs('div', {
                  className: 'sm:p-7 p-4',
                  children: [
                    e.jsxs('table', {
                      className: 'text-left',
                      children: [
                        e.jsx('thead', {
                          children: e.jsxs('tr', {
                            className: 'text-gray-400 bg-primary-700 ',
                            children: [
                              e.jsxs('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                                children: ['Nombre_del_Cliente', ' '],
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                                children: 'Condición',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800  md:table-cell',
                                children: 'Celular',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                                children: 'Expediente/Carpeta_F.',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Especialista/Fiscal',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Materia',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Proceso',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Mesa',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Contrato',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Acto Procesal',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Tiempo',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Culminado',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Ultimo acceso',
                              }),
                            ],
                          }),
                        }),
                        e.jsx('tbody', {
                          className: 'text-gray-600 dark:text-gray-100',
                          children:
                            w[c] &&
                            w[c].map((r, a) =>
                              e.jsxs(
                                'tr',
                                {
                                  className:
                                    r.id % 2 === 0
                                      ? 'bg-gray-100 dark:bg-secondary-980'
                                      : 'bg-white dark:bg-secondary-800',
                                  children: [
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800',
                                      children: e.jsx('div', {
                                        className: 'flex items-center',
                                        children: r.cliente.nombre,
                                      }),
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800',
                                      children: e.jsx('div', {
                                        className: 'flex items-center',
                                        children: r.condiciones,
                                      }),
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: r.cliente.celular,
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: r.expediente,
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: r.fiscal,
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: r.materia,
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: r.proceso,
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: r.mesa,
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: e.jsx('button', {
                                        className:
                                          'text-orange-500 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-orange-400 dark:hover:text-orange-500 dark:focus:ring-orange-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10',
                                        onClick: () => {
                                          Y(r.id);
                                        },
                                        children: r.contrato,
                                      }),
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: e.jsx('button', {
                                        className:
                                          'text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-blue-400 dark:hover:text-blue-500 dark:focus:ring-blue-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10',
                                        onClick: () => V(r.acto_procesal),
                                        children: 'Abrir',
                                      }),
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                      children: e.jsx('div', {
                                        className: 'flex items-center',
                                        children: e.jsx('button', {
                                          className:
                                            'text-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-green-400 dark:hover:text-green-500 dark:focus:ring-green-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10',
                                          onClick: () => {
                                            B(r.mesa) || E(!0), x(0), u(!0);
                                            const n =
                                              document.getElementById(
                                                'modal-cronometro'
                                              );
                                            n.classList.remove('hidden'),
                                              n.setAttribute(
                                                'aria-hidden',
                                                'false'
                                              ),
                                              o(!0),
                                              d.current.classList.add(
                                                'modal-open'
                                              );
                                          },
                                          children: 'Iniciar',
                                        }),
                                      }),
                                    }),
                                    e.jsxs('td', {
                                      className:
                                        r.culminado < 50
                                          ? 'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell text-red-500'
                                          : 'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell text-green-500',
                                      children: [r.culminado, ' %'],
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800',
                                      children: e.jsxs('div', {
                                        className: 'flex items-center',
                                        children: [
                                          e.jsx('div', {
                                            className: 'sm:flex  flex-col',
                                            children: e.jsxs('div', {
                                              className:
                                                'text-gray-400 text-xs',
                                              children: [
                                                H(r.fecha),
                                                e.jsxs('span', {
                                                  className:
                                                    M(r.fecha) > 5
                                                      ? 'text-red-500'
                                                      : 'text-green-500',
                                                  children: [
                                                    ' ',
                                                    '(',
                                                    M(r.fecha),
                                                    ' días)',
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          e.jsx('button', {
                                            className:
                                              'w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto',
                                            onClick: () => {
                                              W(
                                                r.acto_procesal,
                                                r.id,
                                                r.culminado,
                                                r.mesa
                                              );
                                            },
                                            children: e.jsxs('svg', {
                                              viewBox: '0 0 24 24',
                                              className: 'w-5',
                                              stroke: 'currentColor',
                                              'stroke-width': '2',
                                              fill: 'none',
                                              'stroke-linecap': 'round',
                                              'stroke-linejoin': 'round',
                                              children: [
                                                e.jsx('circle', {
                                                  cx: '12',
                                                  cy: '12',
                                                  r: '1',
                                                }),
                                                e.jsx('circle', {
                                                  cx: '19',
                                                  cy: '12',
                                                  r: '1',
                                                }),
                                                e.jsx('circle', {
                                                  cx: '5',
                                                  cy: '12',
                                                  r: '1',
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                a
                              )
                            ),
                        }),
                      ],
                    }),
                    e.jsx('button', {
                      className:
                        ' mt-3 text-|-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-gray-400 dark:hover:text-gray-500 dark:focus:ring-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10',
                      onClick: () => v(c - 1),
                      disabled: c === 0,
                      children: 'Anterior',
                    }),
                    e.jsxs('span', {
                      className: ' mx-3',
                      children: [c + 1, ' de ', w.length],
                    }),
                    e.jsx('button', {
                      className:
                        'text-|-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-gray-400 dark:hover:text-gray-500 dark:focus:ring-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10',
                      onClick: () => v(c + 1),
                      disabled: c === w.length - 1,
                      children: 'Siguiente',
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      e.jsx('div', {
        id: 'default-modal',
        'data-modal-show': 'true',
        'aria-hidden': 'true',
        className:
          'hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center mt-5',
        style: { zIndex: 9999 },
        children: S
          ? e.jsx('div', {
              className: 'relative w-full max-w-2xl px-4 h-full md:h-auto',
              children: e.jsxs('div', {
                className:
                  'bg-white rounded-lg shadow relative dark:bg-gray-700',
                children: [
                  e.jsxs('div', {
                    className:
                      'flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600',
                    children: [
                      e.jsx('h3', {
                        className:
                          'text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white',
                        children: 'Actualización del caso',
                      }),
                      e.jsx('button', {
                        type: 'button',
                        className:
                          'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                        'data-modal-toggle': 'default-modal',
                        onClick: I,
                        children: e.jsx('svg', {
                          className: 'w-5 h-5',
                          fill: 'currentColor',
                          viewBox: '0 0 20 20',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: e.jsx('path', {
                            'fill-rule': 'evenodd',
                            d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                            'clip-rule': 'evenodd',
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    className: 'p-6 space-y-6  text-base',
                    children: e.jsx('div', {
                      className: 'px-6 w-full',
                      children: e.jsx('p', {
                        className: 'text-gray-600 dark:text-gray-300',
                        children: 'No tienes permiso para actualizar este caso',
                      }),
                    }),
                  }),
                ],
              }),
            })
          : e.jsx('div', {
              className: 'relative w-full max-w-2xl px-4 h-full md:h-auto',
              children: e.jsxs('div', {
                className:
                  'bg-white rounded-lg shadow relative dark:bg-gray-700',
                children: [
                  e.jsxs('div', {
                    className:
                      'flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600',
                    children: [
                      e.jsx('h3', {
                        className:
                          'text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white',
                        children: 'Actualización del caso',
                      }),
                      e.jsx('button', {
                        type: 'button',
                        className:
                          'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white',
                        'data-modal-toggle': 'default-modal',
                        onClick: I,
                        children: e.jsx('svg', {
                          className: 'w-5 h-5',
                          fill: 'currentColor',
                          viewBox: '0 0 20 20',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: e.jsx('path', {
                            'fill-rule': 'evenodd',
                            d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                            'clip-rule': 'evenodd',
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'p-6 space-y-6  text-base',
                    children: [
                      e.jsxs('div', {
                        className: 'px-6 w-full',
                        children: [
                          e.jsxs('label', {
                            className:
                              'block text-base font-medium text-gray-700 dark:text-gray-200',
                            children: [
                              'Culminado:',
                              ' ',
                              e.jsxs('span', {
                                className: 'text-gray-400 dark:text-gray-400',
                                children: [k, ' %'],
                              }),
                            ],
                          }),
                          e.jsx('input', {
                            type: 'range',
                            className: 'w-full h-5 ',
                            min: '0',
                            max: '100',
                            step: '1',
                            value: k,
                            onChange: (r) => {
                              A(parseInt(r.target.value));
                            },
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className: 'px-6 w-full',
                        children: [
                          e.jsx('label', {
                            className:
                              'block text-base font-medium text-gray-700 dark:text-gray-200 mb-2',
                            children: 'Acto Procesal',
                          }),
                          e.jsx('textarea', {
                            className:
                              'w-full h-24 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                            value: j,
                            onChange: (r) => {
                              h(r.target.value);
                            },
                          }),
                        ],
                      }),
                      e.jsx('button', {
                        'data-modal-toggle': 'default-modal',
                        type: 'button',
                        className:
                          'text-white bg-primary-450 hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-450 dark:hover:bg-primary-600 dark:focus:ring-blue-800 mr-2',
                        onClick: K,
                        children: 'Guardar',
                      }),
                      e.jsx('button', {
                        'data-modal-toggle': 'default-modal',
                        type: 'button',
                        className:
                          'text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600',
                        onClick: I,
                        children: 'Cancelar',
                      }),
                    ],
                  }),
                ],
              }),
            }),
      }),
      e.jsx('div', {
        id: 'modal-acto-procesal',
        'data-modal-show': 'true',
        'aria-hidden': 'true',
        className:
          'hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center',
        style: { zIndex: 9999 },
        children: e.jsx('div', {
          className: 'relative w-full max-w-2xl px-4 h-full md:h-auto',
          children: e.jsxs('div', {
            className: 'bg-white rounded-lg shadow relative dark:bg-gray-700',
            children: [
              e.jsxs('div', {
                className:
                  'flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600',
                children: [
                  e.jsx('h3', {
                    className:
                      'text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white',
                    children: 'Acto Procesal',
                  }),
                  e.jsx('button', {
                    type: 'button',
                    className:
                      'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                    'data-modal-toggle': 'modal-acto-procesal',
                    onClick: q,
                    children: e.jsx('svg', {
                      className: 'w-5 h-5',
                      fill: 'currentColor',
                      viewBox: '0 0 20 20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: e.jsx('path', {
                        'fill-rule': 'evenodd',
                        d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        'clip-rule': 'evenodd',
                      }),
                    }),
                  }),
                ],
              }),
              e.jsx('div', {
                className: 'p-6 space-y-6  text-base',
                children: e.jsx('div', {
                  className: 'px-6 pb-3 w-full',
                  children: e.jsx('p', {
                    className: 'text-gray-600 dark:text-gray-300',
                    children: j,
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
      e.jsx('div', {
        id: 'modal-cronometro',
        'data-modal-show': 'true',
        'aria-hidden': 'true',
        className:
          'hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center',
        style: { zIndex: 9999 },
        children: S
          ? e.jsx('div', {
              className: 'relative w-full max-w-2xl px-4 h-full md:h-auto',
              children: e.jsxs('div', {
                className:
                  'bg-white rounded-lg shadow relative dark:bg-gray-700',
                children: [
                  e.jsxs('div', {
                    className:
                      'flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600',
                    children: [
                      e.jsx('h3', {
                        className:
                          'text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white',
                        children: 'Tiempo laborado en caso',
                      }),
                      e.jsx('button', {
                        type: 'button',
                        className:
                          'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                        'data-modal-toggle': 'modal-cronometro',
                        onClick: () => {
                          x(0), u(!1);
                          const r = document.getElementById('modal-cronometro');
                          r.classList.add('hidden'),
                            r.setAttribute('aria-hidden', 'true'),
                            o(!1),
                            d.current.classList.remove('modal-open');
                        },
                        children: e.jsx('svg', {
                          className: 'w-5 h-5',
                          fill: 'currentColor',
                          viewBox: '0 0 20 20',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: e.jsx('path', {
                            'fill-rule': 'evenodd',
                            d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                            'clip-rule': 'evenodd',
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    className: 'p-6  text-base',
                    children: e.jsx('p', {
                      className: 'text-gray-600 dark:text-gray-300',
                      children: 'No tienes permiso para trabajar en este caso',
                    }),
                  }),
                ],
              }),
            })
          : e.jsx('div', {
              className: 'relative w-full max-w-2xl px-4 h-full md:h-auto',
              children: e.jsxs('div', {
                className:
                  'bg-white rounded-lg shadow relative dark:bg-gray-700',
                children: [
                  e.jsxs('div', {
                    className:
                      'flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600',
                    children: [
                      e.jsx('h3', {
                        className:
                          'text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white',
                        children: 'Tiempo laborado en caso',
                      }),
                      e.jsx('button', {
                        type: 'button',
                        className:
                          'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                        'data-modal-toggle': 'modal-cronometro',
                        onClick: () => {
                          x(0), u(!1);
                          const r = document.getElementById('modal-cronometro');
                          r.classList.add('hidden'),
                            r.setAttribute('aria-hidden', 'true'),
                            o(!1),
                            d.current.classList.remove('modal-open');
                        },
                        children: e.jsx('svg', {
                          className: 'w-5 h-5',
                          fill: 'currentColor',
                          viewBox: '0 0 20 20',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: e.jsx('path', {
                            'fill-rule': 'evenodd',
                            d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                            'clip-rule': 'evenodd',
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    className: 'p-6  text-base',
                    children: [
                      e.jsx('h2', {
                        className:
                          'text-3xl font-bold text-center text-gray-900 dark:text-white',
                        children: Q(_),
                      }),
                      e.jsx('p', { children: 'Descripción' }),
                      e.jsx('textarea', {
                        className:
                          'w-full h-24 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                        placeholder: 'Agregar descripción (Opcional)',
                      }),
                      e.jsxs('p', {
                        className: 'text-gray-400 text-xs',
                        children: ['Fecha y hora actual: ', T.toLocaleString()],
                      }),
                      e.jsxs('div', {
                        className: 'flex justify-between mt-5',
                        children: [
                          e.jsxs('div', {
                            className: 'space-x-2',
                            children: [
                              e.jsx('button', {
                                className:
                                  'bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800',
                                onClick: () => u(!y),
                                children: y ? 'Pausar' : 'Reanudar',
                              }),
                              e.jsx('button', {
                                className:
                                  'bg-secondary-700 hover:bg-secondary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-secondary-450 dark:hover:bg-secondary-600 dark:focus:ring-blue-800',
                                onClick: () => x(0),
                                children: 'Reiniciar',
                              }),
                            ],
                          }),
                          e.jsxs('div', {
                            className: 'space-x-2',
                            children: [
                              e.jsx('button', {
                                className:
                                  'bg-primary-450 hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-primary-450 dark:hover:bg-primary-600 dark:focus:ring-blue-800',
                                children: 'Guardar',
                              }),
                              e.jsx('button', {
                                className:
                                  'bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800',
                                onClick: () => {
                                  x(0), u(!1);
                                  const r =
                                    document.getElementById('modal-cronometro');
                                  r.classList.add('hidden'),
                                    r.setAttribute('aria-hidden', 'true'),
                                    o(!1),
                                    d.current.classList.remove('modal-open');
                                },
                                children: 'Cancelar',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
      }),
      e.jsx('div', {
        id: 'modal-table-pagos',
        'data-modal-show': 'true',
        'aria-hidden': 'true',
        className:
          'hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center',
        children: e.jsx('div', {
          className: 'relative w-full max-w-2xl px-4 h-full md:h-auto',
          children: e.jsxs('div', {
            className: 'bg-white rounded-lg shadow relative dark:bg-gray-700',
            children: [
              e.jsxs('div', {
                className:
                  'flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600',
                children: [
                  e.jsx('h3', {
                    className:
                      'text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white',
                    children: 'Pagos',
                  }),
                  e.jsx('button', {
                    type: 'button',
                    className:
                      'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                    'data-modal-toggle': 'modal-table-pagos',
                    onClick: () => {
                      const r = document.getElementById('modal-table-pagos');
                      r.classList.add('hidden'),
                        r.setAttribute('aria-hidden', 'true'),
                        o(!1),
                        d.current.classList.remove('modal-open');
                    },
                    children: e.jsx('svg', {
                      className: 'w-5 h-5',
                      fill: 'currentColor',
                      viewBox: '0 0 20 20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: e.jsx('path', {
                        'fill-rule': 'evenodd',
                        d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        'clip-rule': 'evenodd',
                      }),
                    }),
                  }),
                ],
              }),
              e.jsx('div', {
                className: 'overflow-x-auto p-5',
                children: e.jsxs('table', {
                  className:
                    'min-w-full divide-y-2 divide-gray-700 bg-primary-980 text-sm dark:divide-gray-700 dark:bg-primary-980',
                  children: [
                    e.jsx('thead', {
                      className: 'ltr:text-left rtl:text-right',
                      children: e.jsxs('tr', {
                        children: [
                          e.jsx('th', {
                            className:
                              'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                            children: 'Nombre',
                          }),
                          e.jsx('th', {
                            className:
                              'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                            children: 'Fecha',
                          }),
                          e.jsx('th', {
                            className:
                              'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                            children: 'Estado',
                          }),
                          e.jsx('th', {
                            className:
                              'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                            children: 'Monto',
                          }),
                          e.jsx('th', {
                            className: 'px-4 py-2',
                            children: 'Acciones',
                          }),
                        ],
                      }),
                    }),
                    e.jsxs('tbody', {
                      className:
                        'divide-y divide-gray-200 dark:divide-gray-700',
                      children: [
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                              children: 'John Doe',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: '24/05/1995',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: e.jsx('p', {
                                className:
                                  'text-yellow-500  font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400   dark:bg-gray-700 ',
                                children: 'Pendiente',
                              }),
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: '$120,000',
                            }),
                            e.jsx('td', {
                              className: 'whitespace-nowrap px-4 py-2',
                              children: e.jsx('a', {
                                href: '#',
                                className:
                                  'inline-block rounded bg-primary-450 px-4 py-2 text-xs font-medium text-white hover:bg-primary-500',
                                children: 'Ver',
                              }),
                            }),
                          ],
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                              children: 'Jane Doe',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: '04/11/1980',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: e.jsx('p', {
                                className:
                                  'text-green-500  font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-green-400   dark:bg-gray-700 ',
                                children: 'Pagado',
                              }),
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: '$100,000',
                            }),
                            e.jsx('td', {
                              className: 'whitespace-nowrap px-4 py-2',
                              children: e.jsx('a', {
                                href: '#',
                                className:
                                  'inline-block rounded bg-primary-450 px-4 py-2 text-xs font-medium text-white hover:bg-primary-500',
                                children: 'Ver',
                              }),
                            }),
                          ],
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                              children: 'Gary Barlow',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: '24/05/1995',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: e.jsx('p', {
                                className:
                                  'text-red-500  font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-red-400   dark:bg-gray-700 ',
                                children: 'Anulado',
                              }),
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: '$20,000',
                            }),
                            e.jsx('td', {
                              className: 'whitespace-nowrap px-4 py-2',
                              children: e.jsx('a', {
                                href: '#',
                                className:
                                  'inline-block rounded bg-primary-450 px-4 py-2 text-xs font-medium text-white hover:bg-primary-500',
                                children: 'Ver',
                              }),
                            }),
                          ],
                        }),
                        e.jsxs('tr', {
                          children: [
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                              children: 'Total',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                            }),
                            e.jsx('td', {
                              className:
                                'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                              children: '$220,000',
                            }),
                            e.jsx('td', {
                              className: 'whitespace-nowrap px-4 py-2',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      e.jsx('div', {
        id: 'modal-upload-file',
        'data-modal-show': 'true',
        'aria-hidden': 'true',
        className:
          'hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center',
        style: { zIndex: 9999 },
        children: e.jsxs('div', {
          className: 'sm:max-w-lg w-full p-10 bg-primary-980 rounded-xl z-10',
          children: [
            e.jsx('div', {
              className: 'flex items-start justify-between',
              children: e.jsx('button', {
                type: 'button',
                className:
                  'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                'data-modal-toggle': 'modal-upload-file',
                onClick: () => {
                  const r = document.getElementById('modal-upload-file');
                  r.classList.add('hidden'),
                    r.setAttribute('aria-hidden', 'true'),
                    o(!1),
                    d.current.classList.remove('modal-open');
                },
                children: e.jsx('svg', {
                  className: 'w-5 h-5',
                  fill: 'currentColor',
                  viewBox: '0 0 20 20',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: e.jsx('path', {
                    'fill-rule': 'evenodd',
                    d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                    'clip-rule': 'evenodd',
                  }),
                }),
              }),
            }),
            e.jsxs('div', {
              className: 'text-center',
              children: [
                e.jsx('h2', {
                  className: 'mt-5 text-3xl font-bold text-white',
                  children: 'Contrato',
                }),
                e.jsxs('p', {
                  className: 'mt-2 text-sm text-gray-400 subscribe-form',
                  children: [
                    e.jsx('input', {
                      type: 'number',
                      placeholder: 'Ingrese Monto Total S/',
                      onChange: (r) => {
                        D({ ...p, monto_total: +r.target.value });
                      },
                    }),
                    e.jsx('button', {
                      type: 'submit',
                      className:
                        'bg-primary-450 text-white px-4 py-2 rounded-lg hover:bg-primary-600',
                      onClick: () => {
                        Z();
                      },
                      children: 'Guardar',
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs('form', {
              className: 'mt-8 space-y-3',
              action: '#',
              method: 'POST',
              hidden: !0,
              children: [
                e.jsx('div', {
                  className: ' text-center',
                  children: e.jsx('button', {
                    className:
                      ' w-2/3 py-4 bg-secondary-300 text-white px-4  rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 font-medium text-sm dark:bg-secondary-500 dark:hover:bg-secondary-700  dark:text-white',
                    children: 'Descargar',
                  }),
                }),
                e.jsxs('div', {
                  className: S ? 'hidden' : 'grid grid-cols-1 space-y-2',
                  children: [
                    e.jsx('label', {
                      className:
                        'text-sm font-bold text-gray-500 tracking-wide',
                      children: 'Adjuntar Documento',
                    }),
                    e.jsxs('div', {
                      className: 'flex items-center justify-center w-full',
                      children: [
                        e.jsxs('p', {
                          className: 'pointer-none text-gray-500 ',
                          children: [
                            e.jsx('a', {
                              href: '',
                              id: '',
                              className: 'text-amber-600 hover:underline',
                              children: 'selecciona un archivo',
                            }),
                            ' ',
                            'desde tu pc',
                          ],
                        }),
                        e.jsx('input', { type: 'file', className: 'hidden' }),
                      ],
                    }),
                    e.jsx('p', {
                      className: 'text-sm text-gray-300',
                      children: e.jsx('span', { children: 'Tipos: doc,pdf' }),
                    }),
                    e.jsx('div', {
                      children: e.jsx('button', {
                        type: 'submit',
                        className:
                          'my-5 w-full flex justify-center bg-primary-450 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-secondary-50 shadow-lg cursor-pointer transition ease-in duration-300',
                        children: 'Upload',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx('div', {
        id: 'modal-agregar-caso',
        'data-modal-show': 'true',
        'aria-hidden': 'true',
        className:
          'hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center',
        style: { zIndex: 9999 },
        children: e.jsx('div', {
          className: 'relative w-full max-w-2xl px-4 h-full md:h-auto',
          children: e.jsxs('div', {
            className: 'bg-white rounded-lg shadow relative dark:bg-gray-700',
            children: [
              e.jsxs('div', {
                className:
                  'flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600',
                children: [
                  e.jsx('h3', {
                    className:
                      'text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white',
                    children: 'Agregar Caso',
                  }),
                  e.jsx('button', {
                    type: 'button',
                    className:
                      'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                    'data-modal-toggle': 'modal-agregar-caso',
                    onClick: () => {
                      const r = document.getElementById('modal-agregar-caso');
                      r.classList.add('hidden'),
                        r.setAttribute('aria-hidden', 'true'),
                        o(!1),
                        d.current.classList.remove('modal-open');
                    },
                    children: e.jsx('svg', {
                      className: 'w-5 h-5',
                      fill: 'currentColor',
                      viewBox: '0 0 20 20',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: e.jsx('path', {
                        'fill-rule': 'evenodd',
                        d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        'clip-rule': 'evenodd',
                      }),
                    }),
                  }),
                ],
              }),
              e.jsx('div', {
                className: 'p-6 space-y-6  text-base',
                children: e.jsxs('div', {
                  className: 'px-6 w-full',
                  children: [
                    e.jsxs('label', {
                      className:
                        'block text-base font-medium text-gray-700 dark:text-gray-200',
                      children: ['Cliente:', ' '],
                    }),
                    e.jsxs('select', {
                      className:
                        'w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                      onChange: (r) => {
                        i({ ...l, cliente_dni: parseInt(r.target.value) });
                      },
                      value: l.cliente_dni,
                      children: [
                        e.jsx('option', {
                          value: '',
                          children: 'Selecciona un cliente',
                        }),
                        U.map((r, a) =>
                          e.jsx(
                            'option',
                            { value: r.dni, children: r.nombre },
                            a
                          )
                        ),
                      ],
                    }),
                    e.jsxs('div', {
                      className: 'grid grid-cols-1 gap-6 md:grid-cols-2',
                      children: [
                        e.jsxs('div', {
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-base font-medium text-gray-700 dark:text-gray-200',
                              children: 'Expediente:',
                            }),
                            e.jsx('input', {
                              type: 'text',
                              className:
                                'w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                              placeholder: 'Expediente',
                              onChange: (r) => {
                                i({ ...l, expediente: r.target.value });
                              },
                              value: l.expediente,
                            }),
                          ],
                        }),
                        e.jsxs('div', {
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-base font-medium text-gray-700 dark:text-gray-200',
                              children: 'Condicion:',
                            }),
                            e.jsxs('select', {
                              className:
                                'w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                              onChange: (r) => {
                                i({ ...l, condiciones: r.target.value });
                              },
                              value: l.condiciones,
                              children: [
                                e.jsx('option', {
                                  value: '',
                                  disabled: !0,
                                  children: 'Selecciona una condicion',
                                }),
                                e.jsx('option', {
                                  value: 'Demandado',
                                  children: 'Demandado',
                                }),
                                e.jsx('option', {
                                  value: 'Demandante',
                                  children: 'Demandante',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs('div', {
                      className: 'grid grid-cols-1 gap-6 md:grid-cols-2',
                      children: [
                        e.jsxs('div', {
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-base font-medium text-gray-700 dark:text-gray-200',
                              children: 'Fiscal:',
                            }),
                            e.jsx('input', {
                              type: 'text',
                              className:
                                'w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                              placeholder: 'Fiscal',
                              onChange: (r) => {
                                i({ ...l, fiscal: r.target.value });
                              },
                              value: l.fiscal,
                            }),
                          ],
                        }),
                        e.jsxs('div', {
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-base font-medium text-gray-700 dark:text-gray-200',
                              children: 'Materia',
                            }),
                            e.jsx('input', {
                              type: 'text',
                              className:
                                'w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                              placeholder: 'Materia',
                              onChange: (r) => {
                                i({ ...l, materia: r.target.value });
                              },
                              value: l.materia,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs('div', {
                      className: 'grid grid-cols-1 gap-6 md:grid-cols-2',
                      children: [
                        e.jsxs('div', {
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-base font-medium text-gray-700 dark:text-gray-200',
                              children: 'Mesa',
                            }),
                            e.jsxs('select', {
                              className:
                                'w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                              onChange: (r) => {
                                i({ ...l, mesa: r.target.value });
                              },
                              value: l.mesa,
                              children: [
                                e.jsx('option', {
                                  value: '',
                                  children: 'Selecciona una mesa',
                                }),
                                e.jsx('option', {
                                  value: 'Civil',
                                  children: 'Civil',
                                }),
                                e.jsx('option', {
                                  value: 'Penal',
                                  children: 'Penal',
                                }),
                                e.jsx('option', {
                                  value: 'Laboral',
                                  children: 'Laboral',
                                }),
                                e.jsx('option', {
                                  value: 'Empresas',
                                  children: 'Empresas',
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs('div', {
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-base font-medium text-gray-700 dark:text-gray-200',
                              children: 'Contrato',
                            }),
                            e.jsxs('select', {
                              className:
                                'w-full h-10 px-3 py-2 text-base placeholder-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-450 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
                              onChange: (r) => {
                                i({ ...l, contrato: r.target.value });
                              },
                              value: l.contrato,
                              children: [
                                e.jsx('option', {
                                  value: '',
                                  disabled: !0,
                                  children: 'Selecciona una mesa',
                                }),
                                e.jsx('option', {
                                  value: 'SI',
                                  children: 'SI',
                                }),
                                e.jsx('option', {
                                  value: 'NO',
                                  children: 'No',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx('br', {}),
                    e.jsx('button', {
                      'data-modal-toggle': 'modal-agregar-caso',
                      type: 'button',
                      className:
                        'text-white bg-primary-450 hover:bg-primary-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-450 dark:hover:bg-primary-600 dark:focus:ring-blue-800 mr-2',
                      onClick: X,
                      children: 'Guardar',
                    }),
                    e.jsx('button', {
                      'data-modal-toggle': 'modal-agregar-caso',
                      type: 'button',
                      className:
                        'text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600',
                      onClick: () => {
                        const r = document.getElementById('modal-agregar-caso');
                        r.classList.add('hidden'),
                          r.setAttribute('aria-hidden', 'true'),
                          o(!1),
                          d.current.classList.remove('modal-open');
                      },
                      children: 'Cancelar',
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      e.jsx('style', {
        children: `
        .modal-open{
          filter: blur(5px);
        }
        .subscribe-form {
            display: flex;
            border: 1px solid #ccc;
            border-radius: 25px;
            overflow: hidden;
        }
        .subscribe-form input[type="number"] {
            padding: 10px 20px;
            border: none;
            outline: none;
            flex: 1;
            font-size: 16px;
        }
        .subscribe-form button {
            padding: 10px 20px;
            border: none;
            background-color: #0A6C48;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        .subscribe-form button:hover {
            background-color: #23262D;
        }
                `,
      }),
    ],
  });
};
export { ne as default };
