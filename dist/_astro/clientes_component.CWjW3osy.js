import { j as e } from './jsx-runtime.K1e75nIr.js';
import { r as n } from './index.NEDEFKed.js';
import { a as x } from './axios.Cm0UX6qg.js';
const k = () => {
  const [o, c] = n.useState([]),
    [m, i] = n.useState(o),
    [g, h] = n.useState([]),
    [p, b] = n.useState([]),
    [d, s] = n.useState({
      dni: 0,
      nombre: '',
      celular: '',
      correo: '',
      direccion: '',
      estado: 1,
    });
  n.useEffect(() => {
    x.get('http://localhost:4000/clientes').then((r) => {
      console.log(r.data), c(r.data), i(r.data);
    });
  }, []);
  const y = (r) => {
      if (r.length === 0) return;
      const a = document.getElementById('pago_detalles');
      a.classList.add('hidden'), a.setAttribute('aria-hidden', 'true');
      const t = document.getElementById('modal-ver-casos');
      t.classList.remove('hidden'),
        t.setAttribute('aria-hidden', 'false'),
        h(r);
    },
    u = (r) => {
      if (r.length > 0) {
        const a = document.getElementById('pago_detalles');
        a.classList.remove('hidden'),
          a.setAttribute('aria-hidden', 'false'),
          b(r);
      }
    },
    f = (r) => {
      console.log(r), s(r);
    },
    w = () => {
      console.log(d),
        x.post('http://192.168.1.50:3000/clientes/create', d).then((r) => {
          console.log(r.data), c([...o, r.data]), i([...o, r.data]);
          const a = document.getElementById('modal-agregar-cliente');
          a.classList.add('hidden'), a.setAttribute('aria-hidden', 'true');
        });
    };
  return e.jsxs('section', {
    className: 'w-full py-2 bg-primary-980 mt-20 lg:mt-10 mx-auto',
    children: [
      e.jsx('div', {
        className:
          '  bg-gray-100 dark:bg-secondary-900 dark:text-white text-gray-600 flex overflow-hidden text-sm',
        children: e.jsx('div', {
          className: 'w-full overflow-hidden h-full flex flex-col',
          children: e.jsxs('div', {
            className: 'w-full flex overflow-x-hidden',
            children: [
              e.jsxs('div', {
                className:
                  'xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5',
                children: [
                  e.jsx('div', {
                    className: 'flex items-center justify-between mb-6',
                    children: e.jsx('div', {
                      className: 'text-lg text-gray-400 tracking-wider',
                      children: 'CLIENTES',
                    }),
                  }),
                  e.jsxs('div', {
                    className: 'flex flex-col w-full ',
                    children: [
                      e.jsxs('div', {
                        className:
                          'mb-4 p-3 w-full flex flex-col rounded-md bg-gray-800 py-4',
                        children: [
                          e.jsx('div', {
                            className:
                              ' w-16 py-1 px-2 leading-none bg-gray-900  text-blue-500 rounded-md text-center mb-1',
                            children: 'Buscar',
                          }),
                          e.jsx('input', {
                            type: 'text',
                            className:
                              'border border-gray-800 rounded-md p-2 text-sm bg-gray-100',
                            placeholder: 'Ingrese caso',
                            onChange: (r) => {
                              const a = r.target.value,
                                t = o.filter((l) =>
                                  l.nombre
                                    .toLowerCase()
                                    .includes(a.toLowerCase())
                                );
                              i(t);
                            },
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex flex-col w-full mb-4 bg-gray-800 py-4 px-2 rounded-md',
                        children: [
                          e.jsx('div', {
                            className:
                              'w-20 pw-16 text-center mb-1 py-1 px-2  leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md',
                            children: 'Condicion',
                          }),
                          e.jsx('input', {
                            type: 'text',
                            className:
                              'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                            placeholder: 'Ingrese condición',
                            onChange: (r) => {
                              const a = r.target.value,
                                t = o.filter((l) => l.condicion.includes(a));
                              i(t);
                            },
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex flex-col w-full mb-4 bg-gray-800 py-4 px-2 rounded-md',
                        children: [
                          e.jsx('div', {
                            className:
                              'w-16 pw-16 text-center mb-1 py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md',
                            children: 'Estado',
                          }),
                          e.jsxs('select', {
                            className:
                              'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                            onChange: (r) => {
                              const a = r.target.value,
                                t = o.filter((l) => l.estado === parseInt(a));
                              i(t);
                            },
                            children: [
                              e.jsx('option', {
                                value: '',
                                disabled: !0,
                                children: 'Seleccionar',
                              }),
                              e.jsx('option', {
                                value: '1',
                                children: 'Activo',
                              }),
                              e.jsx('option', {
                                value: '0',
                                children: 'Inactivo',
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className: 'flex flex-col w-full mb-4 ',
                        children: e.jsx('button', {
                          className: 'bg-primary-700 text-white p-2 rounded-md',
                          onClick: () => {
                            s({
                              dni: 0,
                              nombre: '',
                              celular: '',
                              correo: '',
                              direccion: '',
                              estado: 1,
                            });
                            const r = document.getElementById(
                              'modal-agregar-cliente'
                            );
                            r.classList.remove('hidden'),
                              r.setAttribute('aria-hidden', 'false');
                          },
                          children: 'Agregar Cliente',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx('div', {
                className:
                  'w-full bg-white dark:bg-secondary-800 overflow-y-auto',
                children: e.jsx('div', {
                  className: 'sm:p-7 p-4 ',
                  children: e.jsxs('table', {
                    className: 'text-left w-full',
                    children: [
                      e.jsx('thead', {
                        children: e.jsxs('tr', {
                          className: 'text-gray-400 bg-primary-700 ',
                          children: [
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                              children: 'DNI',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                              children: 'Nombre',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                              children: 'Casos',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800  md:table-cell',
                              children: 'Celular',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                              children: 'Correo',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                              children: 'Dirección',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                              children: 'Estado',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                              children: 'Editar',
                            }),
                          ],
                        }),
                      }),
                      e.jsx('tbody', {
                        className: 'text-gray-600 dark:text-gray-100',
                        children: m.map((r, a) =>
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
                                    children: r.dni,
                                  }),
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ',
                                  children: e.jsx('div', {
                                    className: 'flex items-center font-bold',
                                    children: r.nombre,
                                  }),
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: e.jsx('button', {
                                    className:
                                      'text-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400 dark:hover:text-yellow-500 dark:focus:ring-yellow-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10',
                                    onClick: () => y(r.casos),
                                    children: e.jsx('div', {
                                      className: 'flex items-center',
                                      children: 'Ver Casos',
                                    }),
                                  }),
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: r.celular,
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: r.correo,
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: r.direccion,
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: r.estado
                                    ? e.jsx('div', {
                                        className: 'text-green-500',
                                        children: 'Activo',
                                      })
                                    : e.jsx('div', {
                                        className: 'text-red-500',
                                        children: 'Inactivo',
                                      }),
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: e.jsx('button', {
                                    className:
                                      'text-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-yellow-400 dark:hover:text-yellow-500 dark:focus:ring-yellow-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:z-10',
                                    onClick: () => {
                                      f(r);
                                      const t = document.getElementById(
                                        'modal-agregar-cliente'
                                      );
                                      t.classList.remove('hidden'),
                                        t.setAttribute('aria-hidden', 'false');
                                    },
                                    children: e.jsx('div', {
                                      className: 'flex items-center',
                                      children: 'Editar',
                                    }),
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
                }),
              }),
            ],
          }),
        }),
      }),
      e.jsx('div', {
        id: 'modal-agregar-cliente',
        'data-modal-show': 'true',
        'aria-hidden': 'true',
        className:
          'hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center',
        style: { zIndex: 9999 },
        children: e.jsx('div', {
          className: 'relative w-full max-w-3xl px-2 h-full md:h-auto',
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
                    children: 'Ingresar nuevo cliente',
                  }),
                  e.jsx('button', {
                    type: 'button',
                    className:
                      'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                    'data-modal-toggle': 'modal-agregar-cliente',
                    'aria-label': 'Close',
                    onClick: () => {
                      const r = document.getElementById(
                        'modal-agregar-cliente'
                      );
                      r.classList.add('hidden'),
                        r.setAttribute('aria-hidden', 'true');
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
                className: 'overflow-x-auto p-5',
                children: [
                  e.jsxs('div', {
                    className: `\r
                flex flex-col\r
                w-full\r
                bg-gray-100\r
                dark:bg-secondary-800\r
                rounded-md\r
                p-4\r
              `,
                    children: [
                      e.jsx('label', {
                        className:
                          'block text-sm text-gray-700 dark:text-gray-200',
                        children: 'DNI',
                      }),
                      e.jsx('input', {
                        type: 'text',
                        className:
                          'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                        placeholder: 'Ingrese DNI',
                        value: d.dni,
                        onChange: (r) =>
                          s({ ...d, dni: parseInt(r.target.value) }),
                      }),
                      e.jsx('label', {
                        className:
                          'block text-sm text-gray-700 dark:text-gray-200',
                        children: 'Cliente',
                      }),
                      e.jsx('input', {
                        type: 'text',
                        className:
                          'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                        placeholder: 'Ingrese nombre del cliente',
                        value: d.nombre,
                        onChange: (r) => s({ ...d, nombre: r.target.value }),
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    className: 'w-full bg-gray-100 dark:bg-secondary-800 mt-3',
                    children: e.jsxs('div', {
                      className: 'flex flex-row ',
                      children: [
                        e.jsxs('div', {
                          className: 'flex flex-col w-full p-4',
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-sm text-gray-700 dark:text-gray-200',
                              children: 'Celular',
                            }),
                            e.jsx('input', {
                              type: 'text',
                              className:
                                'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                              placeholder: 'Ingrese celular',
                              value: d.celular,
                              onChange: (r) =>
                                s({ ...d, celular: r.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs('div', {
                          className: 'flex flex-col w-full p-4',
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-sm text-gray-700 dark:text-gray-200',
                              children: 'Correo',
                            }),
                            e.jsx('input', {
                              type: 'email',
                              className:
                                'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                              placeholder: 'Ingrese correo',
                              value: d.correo,
                              onChange: (r) =>
                                s({ ...d, correo: r.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs('div', {
                          className: 'flex flex-col w-full p-4',
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-sm text-gray-700 dark:text-gray-200',
                              children: 'Direccion',
                            }),
                            e.jsx('input', {
                              type: 'text',
                              className:
                                'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                              placeholder: 'Ingrese dirección',
                              value: d.direccion,
                              onChange: (r) =>
                                s({ ...d, direccion: r.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx('div', {
                    className:
                      'hidden w-full bg-gray-100 dark:bg-secondary-800 mt-3',
                    children: e.jsxs('div', {
                      className: 'flex flex-row ',
                      children: [
                        e.jsxs('div', {
                          className: 'flex flex-col w-full p-4',
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-sm text-gray-700 dark:text-gray-200',
                              children: 'Condición',
                            }),
                            e.jsxs('select', {
                              className:
                                'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                              children: [
                                e.jsx('option', {
                                  value: '',
                                  children: 'Seleccionar',
                                }),
                                e.jsx('option', { value: '1', children: '1' }),
                                e.jsx('option', { value: '2', children: '2' }),
                                e.jsx('option', { value: '3', children: '3' }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs('div', {
                          className: 'flex flex-col w-full p-4',
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-sm text-gray-700 dark:text-gray-200',
                              children: 'Estado',
                            }),
                            e.jsxs('select', {
                              className:
                                'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                              children: [
                                e.jsx('option', {
                                  value: '',
                                  disabled: !0,
                                  children: 'Seleccionar',
                                }),
                                e.jsx('option', {
                                  value: '1',
                                  children: 'Activo',
                                }),
                                e.jsx('option', {
                                  value: '2',
                                  children: 'Inactivo',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsxs('div', {
                    className: 'flex flex-col p4 mt-4',
                    children: [
                      e.jsx('button', {
                        className: '  bg-primary-700 text-white p-2 rounded-md',
                        onClick: w,
                        children: 'Guardar',
                      }),
                      e.jsx('button', {
                        className:
                          ' bg-secondary-800 text-white p-2 rounded-md mt-3',
                        children: 'Cancelar',
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
        id: 'modal-ver-casos',
        'data-modal-show': 'true',
        'aria-hidden': 'true',
        className:
          'hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex items-center justify-center',
        style: { zIndex: 9999 },
        children: e.jsx('div', {
          className: 'relative w-full max-w-3xl px-2 h-full md:h-auto',
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
                    children: 'Casos',
                  }),
                  e.jsx('button', {
                    type: 'button',
                    className:
                      'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                    'data-modal-toggle': 'modal-ver-casos',
                    'aria-label': 'Close',
                    onClick: () => {
                      const r = document.getElementById('modal-ver-casos');
                      r.classList.add('hidden'),
                        r.setAttribute('aria-hidden', 'true');
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
                children: e.jsx('div', {
                  className:
                    'flex flex-col w-full bg-gray-100 dark:bg-secondary-800 rounded-md p-4',
                  children: e.jsx('div', {
                    className: 'flex flex-row ',
                    children: e.jsx('div', {
                      className: 'flex flex-col w-full p-4',
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
                                  children: 'Nombre Caso',
                                }),
                                e.jsx('th', {
                                  className:
                                    'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                                  children: 'Estado',
                                }),
                                e.jsx('th', {
                                  className:
                                    'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                                  children: 'Pagado',
                                }),
                                e.jsx('th', {
                                  className:
                                    'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                                  children: 'Pendiente',
                                }),
                                e.jsx('th', {
                                  className: 'px-4 py-2',
                                  children: 'Pagos',
                                }),
                              ],
                            }),
                          }),
                          e.jsx('tbody', {
                            className:
                              'divide-y divide-gray-200 dark:divide-gray-700',
                            children: g.map((r, a) =>
                              e.jsxs(
                                'tr',
                                {
                                  className:
                                    a % 2 === 0
                                      ? 'bg-gray-100 dark:bg-secondary-980'
                                      : 'bg-white dark:bg-secondary-800',
                                  children: [
                                    e.jsx('td', {
                                      className:
                                        'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                                      children: r.expediente,
                                    }),
                                    e.jsx('td', {
                                      className:
                                        'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                                      children: e.jsx('p', {
                                        className: `${
                                          r.pagos.length > 0
                                            ? r.pagos.reduce((t, l) =>
                                                t.saldo_restante <
                                                l.saldo_restante
                                                  ? t
                                                  : l
                                              ).saldo_restante > 0
                                              ? 'bg-red-400'
                                              : 'bg-green-400'
                                            : 'bg-gray-400'
                                        }  font-medium rounded-lg text-sm px-2 py-1 text-center dark:text-green-400   dark:bg-gray-700 `,
                                        children:
                                          r.pagos.length > 0
                                            ? r.pagos.reduce((t, l) =>
                                                t.saldo_restante <
                                                l.saldo_restante
                                                  ? t
                                                  : l
                                              ).saldo_restante > 0
                                              ? 'Pendiente'
                                              : 'Culminado'
                                            : 'Sin pagos',
                                      }),
                                    }),
                                    e.jsxs('td', {
                                      className:
                                        'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                                      children: [
                                        'S/',
                                        r.pagos.length > 0
                                          ? r.pagos.reduce(
                                              (t, l) => t + l.monto,
                                              0
                                            )
                                          : 0,
                                      ],
                                    }),
                                    e.jsxs('td', {
                                      className:
                                        'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200',
                                      children: [
                                        'S/',
                                        r.pagos.length > 0
                                          ? r.pagos.reduce((t, l) =>
                                              t.saldo_restante <
                                              l.saldo_restante
                                                ? t
                                                : l
                                            ).saldo_restante
                                          : 0,
                                      ],
                                    }),
                                    e.jsx('td', {
                                      className: 'whitespace-nowrap px-4 py-2',
                                      children: e.jsx('button', {
                                        className:
                                          'inline-block rounded bg-primary-450 px-4 py-2 text-xs font-medium text-white hover:bg-primary-500',
                                        onClick: () => u(r.pagos),
                                        children:
                                          r.pagos.length > 0
                                            ? 'Ver'
                                            : 'Sin pagos',
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
                    }),
                  }),
                }),
              }),
              e.jsx('div', {
                className: 'hidden overflow-x-auto p-5',
                id: 'pago_detalles',
                children: e.jsxs('div', {
                  className:
                    'flex flex-col w-full bg-primary-990 rounded-md p-4',
                  children: [
                    e.jsx('div', {
                      className: 'flex items-start justify-between',
                      children: e.jsx('button', {
                        type: 'button',
                        className:
                          'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-900 dark:hover:text-white',
                        'data-modal-toggle': 'pago_detalles',
                        'aria-label': 'Close',
                        onClick: () => {
                          const r = document.getElementById('pago_detalles');
                          r.classList.add('hidden'),
                            r.setAttribute('aria-hidden', 'true');
                        },
                        children: e.jsx('svg', {
                          className: 'w-3 h-3',
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
                    e.jsx('div', {
                      className: 'flex flex-row ',
                      children: e.jsx('div', {
                        className: 'flex flex-col w-full p-4',
                        children: e.jsxs('table', {
                          className:
                            'min-w-full divide-y-2 divide-gray-700 bg-primary-990 text-sm dark:divide-gray-700 ',
                          children: [
                            e.jsx('thead', {
                              className: 'ltr:text-left rtl:text-right',
                              children: e.jsxs('tr', {
                                children: [
                                  e.jsx('th', {
                                    className:
                                      'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                                    children: 'Fecha',
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                                    children: 'Descripción',
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                                    children: 'Monto',
                                  }),
                                  e.jsx('th', {
                                    className:
                                      'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white',
                                    children: 'Pendiente',
                                  }),
                                ],
                              }),
                            }),
                            e.jsx('tbody', {
                              className:
                                'divide-y divide-gray-200 dark:divide-gray-700',
                              children: p.map((r, a) =>
                                e.jsxs(
                                  'tr',
                                  {
                                    className:
                                      a % 2 === 0
                                        ? 'bg-gray-100 dark:bg-secondary-980'
                                        : 'bg-white dark:bg-secondary-800',
                                    children: [
                                      e.jsx('td', {
                                        className:
                                          'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-center',
                                        children: new Date(
                                          r.fecha_pago
                                        ).toLocaleDateString(),
                                      }),
                                      e.jsx('td', {
                                        className:
                                          'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 text-center',
                                        children: r.descripcion,
                                      }),
                                      e.jsxs('td', {
                                        className:
                                          'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 text-center',
                                        children: ['S/', r.monto],
                                      }),
                                      e.jsxs('td', {
                                        className:
                                          'whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200 text-center',
                                        children: ['S/', r.saldo_restante],
                                      }),
                                    ],
                                  },
                                  a
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
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
          input {
            background-color: #13151A !important;
          }
          select{
            background-color: #13151A !important;
          }
         
          `,
      }),
    ],
  });
};
export { k as default };