const server = 'http://localhost:8080';
//const server = '';
// const serverAngular = 'http://localhost:4200';


export const CONSTANTS = {

    assets: {
        imgPath: '/assets/img/'
    },
    endpoints: {
        /* RECURSOS */
        obtenerDatosAsignarRecurso: server + `/recurso/datosBusquedaAsignacionRecurso`,
        getLideres: server + '/empleado/obtenerLideres',
        obtenerDatosVacaciones: server + '/vacaciones/obtenervacaciones',
        solicitarVacaciones: server + '/vacaciones/solicitarvacaciones',
        obtenerDatosSolicitudVacaciones: server + '/vacaciones/obtenersolicitudvacaciones',
        validarVacaciones: server + '/vacaciones/validarsolicitudvacaciones',
        empleadosDeLider: server + '/vacaciones/empleadosDelLider',
        obtenerFechaFin: server + '/vacaciones/calculaFechaFinVacaciones',
        iniciarValidacionVobosRecursos: server + '/recurso/iniciarTemplatesVobos',
        descargarXLSRecursosAsignados: server + '/recurso/xlsRecursosAsignados',
        consultoresBcTemplatesVobos: server + '/recurso/consultoresBcTemplatesVobos',
        allConsultoresBcTemplatesVobos: server + '/recurso/AllConsultoresBcTemplatesVobos',
        cerrarTemplatesVobos: server + '/recurso/cerrarTemplatesVobos',
        consultoranalista: server + '/analista/consultoranalista',
        buscaEmpleadodata: server + '/analista/buscaEmpleadodata',
        consultoresLider: server + '/recurso/consultoresLider',
        sustituirConsultor: server + '/recurso/sustituirConsultor',
        sustitucionConsultor: server + '/recurso/sustitucionConsultor',
        generarCartaSustitucion: server + '/recurso/generaCartaSustitucion',
        documentosConsultor: server + '/onboarding/documentosConsultor',
        asociarRecursoProyecto: server + '/recurso/asociarRecursoProyecto',
        obtenerDocumentosProyecto: server + '/proyecto/descargarDocsProyecto',

        /* PROYECTO */
        consultarProyecto: server + '/proyecto/consultarProyecto',
        crearProyecto: server + '/proyecto/crearProyecto',
        asociarTq: server + '/proyecto/asociarTq',
        finalizarProyecto: server + '/proyecto/finalizarProyecto',
        datosMoficarProyecto: server + '/proyecto/datosModificarProyecto',
        actualizarProyecto: server + '/proyecto/updateProyecto',
        infoConConsultores: server + '/proyecto/infoConConsultores',
        obtenerAnalistasDelegacionPo: server + '/analista/obtenerAnalistasDelegacionPo',
        delegarPoAnalista: server + '/proyecto/delegarPoAnalista',
        aceptarTqSo: server + '/proyecto/actualizaEstatusPoTq',
        proyectoTemplatesVobos: server + '/proyecto/proyectoTemplatesVobos',
        proyectosLider: server + '/proyecto/proyectosLider',
        proyectoLiderLogeado: server + '/proyecto/proyectosLiderLogeado',
        proyectoExterno: server + '/proyecto/proyectoExternoDatos',
        consultorExterno: server + '/proyecto/consultorExterno',
        infoValidarExterno: server + '/proyecto/infoValidarExterno',
        validaExterno: server + '/proyecto/validarConsultorExterno',
        validaRechazaExternos: server + '/proyecto/validarRechazarExternos',
        consultoresProyecto: server + '/proyecto/consultoresProyecto',

        /* DOCUMENTOS PROYECTO */
        obtenerProyectoPorPricing: server + '/proyecto/obtenerProyectoPorPricing',
        descargarDocsProyecto: server + '/proyecto/descargarDocsProyecto',
        rechazarDocPo: server + '/proyecto/rechazarDocumentosProyecto',
        aceptarDocPo: server + '/proyecto/aceptarDocumentosProyecto',

        /* PERSONAL BANCO */
        obtenerPersonalBanco: server + '/personalbanco',
        obtenerBCporProyecto: server + '/proyecto/businessProyecto',
        obtenerRecursosDeBc: server + '/empleado/obtenerEmpleadosVobos',
        guardarVobos: server + '/empleado/guardarVobos',
        rechazarVobos: server + '/empleado/rechazoVobos',
        guardarPersonalBanco: server + '/personalbanco',
        obtenerPersonal: server + '/personalbanco/',
        updatePersonalBanco: server + '/personalbanco',

        /* CLIENTES */
        getClientes: server + '/clientes',
        altaCliente2: server + '/clientes',
        getCliente: server + '/clientes/',
        modificaCliente: server + '/clientes',


        /* PROVEEDORES */
        getProveedoresActivos: server + '/proveedores',
        altaProveedor: server + '/proveedores',
        obtenerproveedor: server + '/proveedores/',
        modificaproveedor: server + '/proveedores',
        altaCliente: server + '/clientes',
        obtenerCliente: server + '/clientes',
        modificarCliente: server + '/clientes',


        /* PROVEEDORES */
        obtenerproveedoresactivos: server + '/proveedores',
        altaproveedor: server + '/proveedor/altaproveedor',

        /* CATALOGO DE BANDAS*/
        altaBanda: server + '/bandas',
        obtenerBandas : server + '/bandas/',
        modificarBandas: server + '/bandas',
        bandasActivas: server + '/bandas',


        /** CATALOGO DE SEDES**/
        obtenerSede: server + '/sedes/',
        getSedesActivas: server + '/sedes',
        altaSede: server + '/sedes',
        modificarSedes: server + '/sedes',


        /*RECURSOS */
        obtenerDatosBackOffice: server + '/recurso/obtenerDatosBackOffice',
        recursosLiderLogeado: server + '/recurso/recursosLiderLogeado',
        altaBackOffice: server + '/recurso/altaBackOffice',
        empleadosTodos: server + '/empleado/empleadosTodos',
        infoDocs: server + '/recurso/infoDocsConsultor',
        agregarDocRecurso: server + '/recurso/docsRecurso',

        /*TICKETS*/
        obtenerDatosTicketBaja: server + '/ticket/obtenerDatosTicketBaja',
        obtenerCamposTicket: server + '/ticket/obtenerCamposTicket',
        datosTicketBaja: server + '/ticket/datosTicketBaja',
        generarTemplate: server + '/ticket/generarTemplate',
        guardaDatosBaja2: server + '/ticket/guardaDatosBaja2',
        ObtenerCamposTicket: server + '/ticket/ObtenerCamposTicket',
        obtenerEmpleadosActivosConPaActiva: server + '/ticket/obtenerEmpleadosActivosConPaActiva', //PINTAR EMPLEADOS TICKET BAJA CONSULTO
        informacionTicketsFases: server + '/ticket/infoTicketsFases',
        infoTemplateF3: server + '/templateTicket/infoAprobacion',
        saveTicketFases: server + '/ticket/altaTicketFases',

        /* CATALOGO DE CURSOS */
        altaCurso: server + '/cursos',
        consultaCursos: server + '/cursos',
        modifcarCurso: server + '/cursos',
        consultaCurso: server + '/cursos/',
        cursosEmpleadoRFC: server + '/curso/cursosEmpleadoRFC',
        asignaCursoConsultor: server + '/curso/asignaCursoConsultor',
        inactivaCursosConsultor: server + '/curso/inactivaCursosConsultor',

        /* CATALOGO DE DOCUMENTOS */
        altaDocumento: server + '/documentos',
        consultaDocumentos: server + '/documentos',
        modifcarDocumento: server + '/documentos',

        /* CATALOGO DE NIVELES */
        altaNivel: server + '/niveles',
        consultaNiveles: server + '/niveles',
        modifcarNivel: server + '/niveles',

        /* TICKETS */
        obtenerFasesActivas: server + '/onboarding/obtenerFases',
        obtenerCamposActivos: server + '/ticket/catalogoCampos',
        guardarNuevoCampoTicket: server + '/ticket/addCampoCatalogo',
        listaConsultoresAnalista: server + '/ticket/listaConsultoresAnalista', // CONSULTA DE TICKETS
        procesoObIniciado: server + '/ticket/procesoObIniciado', // CONSULTA DE TICKETS
        regresaConsultorF2: server + '/ticket/regresaConsultorF2', // CONSULTA DE TICKETS
        obtenerAnalistasDelegacion: server + '/analista/obtenerAnalistasDelegacionRecurso', //CONSULTA DE TICKETS
        delegarRecurso: server + '/analista/delegarRecurso',
        guardarNuevoTicket: server + '/ticket/altaTicketCatalogo',
        obtenerTicketsActivos: server + '/ticket/catalogoTickets',
        obtenerInfoTicket: server + '/ticket/ticketCatalogo',
        guardarModificacionTicket: server + '/ticket/actualizarTicketCatalogo',
        ActualizaEstatusTicketFase: server + '/ticket/cambiarEstatusTicketFase',
        FinalizaProcesoTicketFase: server + '/ticket/finalizaProcesoFase',

        /*EMPLEADO ROL*/
        rolesExist: server + '/roles',
        findRolesEmpleado : server + '/roles/',
        agregaRolEmpleado: server + '/roles',
        borradoLogicoRolEmpleado: server + '/roles',
        empleadosPoRfc: server + '/empleado/empleadosPoRfc',

        /* TEMPLATES ONBOARDING */
        templateVoboBc: server + '/templates/templateVobosBc',

        /* FASES ANALISTA*/
        fasedata: server + '/analista/fasedata',
        asignarAnalista: server + '/analista/asignarAnalista',
        asignacionesAnalista: server + '/analista/asignacionesAnalista',
        eliminarAnalista: server + '/analista/eliminarAnalista',

        /** CATALOGO DE PRACTICAS **/
        practicasActivas: server + '/practicas/',
        getPracticasActivas: server + '/practicas',
        altaPractica: server + '/practicas',
        updatePracticas: server + '/practicas',

        /** CATALOGO DE PUESTOS **/
        obtenerPuestosActivos: server + '/catpuestos',
        modificaPuesto: server + '/catpuestos',
        obtenerPuestos: server + '/catpuestos/',
        altaPuesto: server + '/catpuestos',


        /** CARGA DE HORAS **/
        cargaConsultor: server + '/cargahoras/cargaConsultor',
        nextCargaConsultor: server + '/cargahoras/nextCargaConsultor',
        anteriorCargaConsultor: server + '/cargahoras/anteriorCargaConsultor',
        cargar: server + '/cargahoras/cargar',
        cargaInicialLider: server + '/cargahoras/cargaInicialLider',
        busquedaCarga: server + '/cargahoras/busquedaCarga',
        validarCarga: server + '/cargahoras/validarCarga',
        cargaPoDia: server + '/cargahoras/obtenerCargas',
        reporteRapido: server + '/cargahoras/reporteRapido',

        /** INCIDENCIAS **/
        llenaDatosIncidencia: server + '/incidencias/llenaDatosIncidencia',
        buscaIncidenciasConsultor: server + '/incidencias/buscaIncidenciasConsultor',
        capturaIncidencia: server + '/incidencias/capturaIncidencia',
        bajaIncidenciaConsultor: server + '/incidencias/bajaIncidenciaConsultor',
    },
    errorMsgs: {
        loginFailed: 'Ocurrió un error. Usuario no válido'
    },
    servers: {
        frontEnd: 'http://localhost:4200'
    }
};
