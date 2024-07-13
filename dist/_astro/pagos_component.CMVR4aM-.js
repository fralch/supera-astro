import { j as e } from './jsx-runtime.K1e75nIr.js';
import { r as d } from './index.NEDEFKed.js';
import { a as g } from './axios.Cm0UX6qg.js';
const F = () => {
  const [i, h] = d.useState([]),
    [j, n] = d.useState(i),
    [P, p] = d.useState(!1),
    [b, v] = d.useState([]),
    [u, y] = d.useState([]),
    [o, f] = d.useState([]),
    [c, w] = d.useState([]),
    [N, k] = d.useState(null),
    [l, x] = d.useState({
      cliente: '',
      caso: '',
      descripcion: '',
      monto: '',
      metodo_pago: '',
    });
  d.useEffect(() => {
    localStorage.getItem('userData')
      ? (console.log(JSON.parse(localStorage.getItem('userData'))),
        k(JSON.parse(localStorage.getItem('userData'))))
      : (window.location.href = '/');
  }, []),
    d.useEffect(() => {
      g.get('http://localhost:4000/pagos').then((a) => {
        h(a.data), n(a.data);
      });
    }, []),
    d.useEffect(() => {
      if (o.length === 0) return;
      console.log(o);
      const a = o.reduce((m, D) => m + parseFloat(D.monto), 0);
      let t = o[o.length - 1].monto_total - a;
      const r = t === 0 ? 'pagado' : 'pendiente';
      t < 0 && (t = 0);
      const s = [
        {
          caso: o[o.length - 1].caso,
          fecha: o[o.length - 1].fecha_pago,
          monto_pagado: a,
          saldo_restante: t,
          estado: r,
          monto_total: o[o.length - 1].monto_total,
        },
      ];
      w(s);
    }, [o]);
  const S = async () => {
      _('administrador');
      const a = await g.get('http://localhost:4000/clientes');
      console.log(a.data), v(a.data);
      const t = document.getElementById('modal-table-pagos');
      t.classList.remove('hidden'),
        t.setAttribute('aria-hidden', 'false'),
        p(!0);
    },
    _ = (a) => {
      let t = N.cargo,
        r = !1;
      return t.toLowerCase() === a.toLowerCase() && (r = !0), r;
    },
    C = async () => {
      const a = {
        caso_id: +l.caso,
        monto: +l.monto,
        fecha_pago: new Date(),
        descripcion: l.descripcion,
        metodo_pago: l.metodo_pago,
        monto_total: c[0]?.monto_total ? +c[0].monto_total : 0,
        saldo_restante: c[0]?.saldo_restante ? c[0].monto_total - +l.monto : 0,
        estado: c[0]?.estado ? c[0].estado : 'pendiente',
      };
      g.post('http://localhost:4000/pagos', a).then((t) => {
        g.get('http://localhost:4000/pagos').then((s) => {
          h(s.data), n(s.data);
        });
        const r = document.getElementById('modal-table-pagos');
        r.classList.add('hidden'), r.setAttribute('aria-hidden', 'true'), p(!1);
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
                      children: 'PAGOS',
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
                            onChange: (a) => {
                              const t = a.target.value,
                                r = i.filter((s) =>
                                  s.caso.expediente.includes(t)
                                );
                              n(r);
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
                              'w-16 pw-16 text-center mb-1 py-1 px-2  leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md',
                            children: 'Fecha',
                          }),
                          e.jsx('input', {
                            type: 'date',
                            className:
                              'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                            placeholder: 'Fecha',
                            onChange: (a) => {
                              const t = a.target.value,
                                r = i.filter((s) => s.fecha_pago.includes(t));
                              n(r);
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
                            onChange: (a) => {
                              const t = a.target.value,
                                r = i.filter((s) => s.estado.includes(t));
                              n(r);
                            },
                            children: [
                              e.jsx('option', {
                                value: '',
                                children: 'Seleccionar',
                              }),
                              e.jsx('option', {
                                value: 'pagado',
                                children: 'Pagado',
                              }),
                              e.jsx('option', {
                                value: 'pendiente',
                                children: 'Pendiente',
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs('div', {
                        className:
                          'flex flex-col w-full mb-4 bg-gray-800 py-4 px-2 rounded-md',
                        children: [
                          e.jsx('div', {
                            className:
                              ' w-24 pw-16 text-center mb-1 py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-red-500 rounded-md',
                            children: 'Monto total',
                          }),
                          e.jsx('input', {
                            type: 'number',
                            className:
                              'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                            placeholder: 'Monto total',
                            onChange: (a) => {
                              const t = a.target.value;
                              if (t === '') {
                                n(i);
                                return;
                              }
                              const r = i.filter(
                                (s) => parseFloat(s.monto) === parseFloat(t)
                              );
                              n(r);
                            },
                          }),
                        ],
                      }),
                      e.jsx('div', {
                        className: 'flex flex-col w-full mb-4 ',
                        children: e.jsx('button', {
                          className: 'bg-primary-700 text-white p-2 rounded-md',
                          onClick: () => {
                            S();
                          },
                          children: 'Agregar Pago',
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
                              children: 'Caso',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                              children: 'Monto',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800  md:table-cell',
                              children: 'Fecha',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800',
                              children: 'Descripcion',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                              children: 'Metodo de pago',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                              children: 'Monto total',
                            }),
                            e.jsx('th', {
                              className:
                                'font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white',
                              children: 'Saldo pendiente',
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
                        children: j.map((a, t) =>
                          e.jsxs(
                            'tr',
                            {
                              className:
                                a.id % 2 === 0
                                  ? 'bg-gray-100 dark:bg-secondary-980'
                                  : 'bg-white dark:bg-secondary-800',
                              children: [
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800',
                                  children: e.jsx('div', {
                                    className: 'flex items-center',
                                    children: a.caso.expediente,
                                  }),
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ',
                                  children: e.jsxs('div', {
                                    className: 'flex items-center font-bold',
                                    children: ['S/ ', a.monto],
                                  }),
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: new Date(
                                    a.fecha_pago
                                  ).toLocaleDateString(),
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: a.descripcion,
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: a.metodo_pago,
                                }),
                                e.jsxs('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: ['S/ ', a.monto_total],
                                }),
                                e.jsxs('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: [
                                    'S/ ',
                                    a.monto_total ? a.saldo_restante : 0,
                                  ],
                                }),
                                e.jsx('td', {
                                  className:
                                    'sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell ',
                                  children: a.estado,
                                }),
                              ],
                            },
                            t
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
        id: 'modal-table-pagos',
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
                    children: 'Ingresar nuevo pago',
                  }),
                  e.jsx('button', {
                    type: 'button',
                    className:
                      'text-gray-400 bg-gray-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-400 dark:hover:text-white',
                    'data-modal-toggle': 'modal-table-pagos',
                    onClick: () => {
                      const a = document.getElementById('modal-table-pagos');
                      a.classList.add('hidden'),
                        a.setAttribute('aria-hidden', 'true'),
                        p(!1);
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
                        children: 'Cliente',
                      }),
                      e.jsxs('select', {
                        className:
                          'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm w-full',
                        onChange: (a) => {
                          const t = a.target.value;
                          if (
                            (x({ ...l, cliente: t, caso: '' }), w([]), t === '')
                          ) {
                            y([]);
                            return;
                          }
                          const r = b.find(
                            (s) => parseInt(s.id) === parseInt(t)
                          );
                          y(r.casos);
                        },
                        value: l.cliente,
                        children: [
                          e.jsx('option', {
                            value: '',
                            children: 'Seleccionar cliente',
                          }),
                          b.map((a, t) =>
                            e.jsx(
                              'option',
                              { value: a.id, children: a.nombre },
                              t
                            )
                          ),
                        ],
                      }),
                      e.jsx('label', {
                        className:
                          'block text-sm text-gray-700 dark:text-gray-200',
                        children: 'Caso',
                      }),
                      e.jsxs('select', {
                        className:
                          'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm w-full',
                        onChange: (a) => {
                          const t = a.target.value;
                          if (t === '') {
                            f([]);
                            return;
                          }
                          x({ ...l, caso: t });
                          const r = u.find(
                              (m) => parseInt(m.id) === parseInt(t)
                            ),
                            s = r.pagos.map((m) => ({
                              ...m,
                              caso: r.expediente,
                            }));
                          f(s);
                        },
                        value: l.caso,
                        children: [
                          e.jsx('option', {
                            value: '',
                            children: 'Seleccionar caso',
                          }),
                          u.map((a, t) =>
                            e.jsx(
                              'option',
                              { value: a.id, children: a.expediente },
                              t
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs('table', {
                    className:
                      'min-w-full mt-3 divide-y-2 divide-gray-700 bg-primary-980 text-sm dark:divide-gray-700 dark:bg-primary-980 rounded-md',
                    children: [
                      e.jsx('thead', {
                        className: 'ltr:text-left rtl:text-right',
                        children: e.jsxs('tr', {
                          children: [
                            e.jsx('th', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-left',
                              children: 'Caso',
                            }),
                            e.jsx('th', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-left',
                              children: 'Fecha',
                            }),
                            e.jsx('th', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-center',
                              children: 'Estado',
                            }),
                            e.jsx('th', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-right',
                              children: 'Pagado',
                            }),
                            e.jsx('th', {
                              className:
                                'whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white text-right',
                              children: 'Pendiente',
                            }),
                          ],
                        }),
                      }),
                      e.jsx('tbody', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700',
                        children: c.map((a, t) =>
                          e.jsxs(
                            'tr',
                            {
                              children: [
                                e.jsx('td', {
                                  className:
                                    'px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-left',
                                  children: a.caso,
                                }),
                                e.jsx('td', {
                                  className:
                                    'px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-left',
                                  children: new Date(
                                    a.fecha
                                  ).toLocaleDateString(),
                                }),
                                e.jsx('td', {
                                  className:
                                    'px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-center',
                                  children: a.estado,
                                }),
                                e.jsxs('td', {
                                  className:
                                    'px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-right',
                                  children: ['S/ ', a.monto_pagado],
                                }),
                                e.jsxs('td', {
                                  className:
                                    'px-4 py-2 whitespace-nowrap text-gray-900 dark:text-white text-right',
                                  children: ['S/ ', a.saldo_restante],
                                }),
                              ],
                            },
                            t
                          )
                        ),
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
                              children: 'Descripcion',
                            }),
                            e.jsx('input', {
                              type: 'text',
                              className:
                                'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                              placeholder: 'Ingrese descripcion',
                              onChange: (a) => {
                                const t = a.target.value;
                                x({ ...l, descripcion: t });
                              },
                            }),
                          ],
                        }),
                        e.jsxs('div', {
                          className: 'flex flex-col w-full p-4',
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-sm text-gray-700 dark:text-gray-200',
                              children: 'Monto',
                            }),
                            e.jsx('input', {
                              type: 'number',
                              className:
                                'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                              placeholder: 'Ingrese monto S/',
                              onChange: (a) => {
                                const t = a.target.value;
                                x({ ...l, monto: t });
                              },
                            }),
                          ],
                        }),
                        e.jsxs('div', {
                          className: 'flex flex-col w-full p-4',
                          children: [
                            e.jsx('label', {
                              className:
                                'block text-sm text-gray-700 dark:text-gray-200',
                              children: 'Metodo de pago',
                            }),
                            e.jsxs('select', {
                              className:
                                'border border-gray-200 dark:border-gray-800 rounded-md p-2 text-sm',
                              onChange: (a) => {
                                const t = a.target.value;
                                x({ ...l, metodo_pago: t });
                              },
                              children: [
                                e.jsx('option', {
                                  value: '',
                                  disabled: !0,
                                  children: 'Seleccionar',
                                }),
                                e.jsx('option', {
                                  value: 'Efectivo',
                                  children: 'Efectivo',
                                }),
                                e.jsx('option', {
                                  value: 'Yape/Plin',
                                  children: 'Yape/Plin',
                                }),
                                e.jsx('option', {
                                  value: 'Transferencia',
                                  children: 'Transferencia',
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
                        onClick: () => {
                          C();
                        },
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
  });
};
export { F as default };
