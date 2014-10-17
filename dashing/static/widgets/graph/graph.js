/*global $, Dashboard, Rickshaw*/
Dashboard.widgets.Graph = function (dashboard) {
    var self = this,
        widget;
    this.__init__ = function () {
        self.html = $('#templates').find('.widget-graph').clone();
        widget = dashboard.grid.add_widget(
            self.html,
            self.col,
            self.row,
            self.colPosition,
            self.rowPosition);
    };
    this.row = 1;
    this.col = 2;
    this.rowPosition = 1;
    this.colPosition = 1;

    this.render = function () {
        var graph = self.getWidget();
        self.html.css('background-color', self.color);
        graph.find('h1.title').text(self.data.title);
        graph.find('.value').text(self.data.value);
        graph.find('.more-info').text(self.data.more_info);

        if (!graph.find('svg').length) {
            self.renderGraph(graph, self.data);
        }
    };
    this.renderGraph = function (container) {
        var graph = new Rickshaw.Graph({
                element: container[0], 
                width: container.width(), 
                height: container.height(), 
                series: [{
                    color: '#fff',
                    data: self.data.data
                }]
            }), xAxis, yAxis;
        graph.render();

        xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph
        });
        yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph,
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT
        });

        xAxis.render();
        yAxis.render();
    };
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 1000;
};
