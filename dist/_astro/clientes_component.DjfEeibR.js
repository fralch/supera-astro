import { j as e } from './jsx-runtime.K1e75nIr.js';
import { r as o } from './index.NEDEFKed.js';
import { a as n } from './axios.Cm0UX6qg.js';
const g = () => {
  const [l, c] = o.useState([]),
    [i, d] = o.useState(l);
  return (
    o.useEffect(() => {
      n.get('http://192.168.1.50:3000/clientes').then((r) => {
        console.log(r.data), c(r.data), d(r.data);
      });
    }, []),
    e.jsxs('section', {
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
                        className: 'text-xs text-gray-400 tracking-wider',
                        children: 'FILTROS',
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
                                  s = l.filter((t) =>
                                    t.caso.expediente.includes(a)
                                  );
                                d(s);
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
                                  s = l.filter((t) => t.estado.includes(a));
                                d(s);
                              },
                              children: [
                                e.jsx('option', {
                                  value: '',
                                  disabled: !0,
                                  children: 'Seleccionar',
                                }),
                                e.jsx('option', {
                                  value: 'activo',
                                  children: 'Activo',
                                }),
                                e.jsx('option', {
                                  value: 'inactivo',
                                  children: 'Inactivo',
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx('div', {
                          className: 'flex flex-col w-full mb-4 ',
                          children: e.jsx('button', {
                            className:
                              'bg-slate-800 text-white p-2 rounded-md ',
                            children: 'Buscar',
                          }),
                        }),
                        e.jsx('div', {
                          className: 'flex flex-col w-full mb-4 ',
                          children: e.jsx('button', {
                            className:
                              'bg-primary-700 text-white p-2 rounded-md',
                            onClick: () => {
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
                                children: 'Condición',
                              }),
                              e.jsx('th', {
                                className:
                                  'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                                children: 'Estado',
                              }),
                            ],
                          }),
                        }),
                        e.jsx('tbody', {
                          className: 'text-gray-600 dark:text-gray-100',
                          children: l.map((r, a) =>
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
                                    children: r.condicion,
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
                        }),
                      ],
                    }),
                    e.jsx('div', {
                      className:
                        'w-full bg-gray-100 dark:bg-secondary-800 mt-3',
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
                                  e.jsx('option', {
                                    value: '1',
                                    children: '1',
                                  }),
                                  e.jsx('option', {
                                    value: '2',
                                    children: '2',
                                  }),
                                  e.jsx('option', {
                                    value: '3',
                                    children: '3',
                                  }),
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
                          className:
                            '  bg-primary-700 text-white p-2 rounded-md',
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
    })
  );
};
export { g as default };
