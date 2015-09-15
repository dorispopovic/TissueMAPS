class AppInstanceFactory {
    static $inject = [
        'CreateViewportService',
        'openlayers',
        '$q',
        'CellSelectionHandlerFactory',
        'CycleLayerFactory',
        'OutlineLayerFactory',
        'ExperimentFactory',
        '$http',
        'Cell',
        'ObjectLayerFactory',
        'ToolLoader'
    ];

    constructor(private createViewportService: CreateViewportService,
                private ol,
                private $q: ng.IQService,
                private cellSelectionHandlerFty: CellSelectionHandlerFactory,
                private cycleLayerFactory: CycleLayerFactory,
                private outlineLayerFactory: OutlineLayerFactory,
                private experimentFactory: ExperimentFactory,
                private $http: ng.IHttpService,
                private Cell,
                private objectLayerFty: ObjectLayerFactory,
                private toolLoader: ToolLoader) {}

    create(experiment: Experiment): AppInstance {
        return new AppInstance(
            this.createViewportService,
            this.ol,
            this.$q,
            this.cellSelectionHandlerFty,
            this.cycleLayerFactory,
            this.outlineLayerFactory,
            this.experimentFactory,
            this.$http,
            this.Cell,
            this.objectLayerFty,
            this.toolLoader,

            experiment
        );
    }
}
angular.module('tmaps.core').service('AppInstanceFactory', AppInstanceFactory);

