/*global Dashboard, $*/
Dashboard.widgets.Clock = function (dashboard) {
    var widget;
    this.__init__ = function () {
        var self = this
        self.html = $('#templates').find('.widget-clock').clone();
        widget = dashboard.grid.add_widget(
            self.html,
            self.col,
            self.row);
    };
    this.row = 1;
    this.col = 1;
    this.render = function render () {
        var self = this,
            clock = self.getWidget();
        self.html.css('background-color', self.data.color);
        clock.find('.date').text(self.data.date);
        clock.find('.time').text(self.data.time);
    };
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {
        var self = this,
            formatTime = function(i) {
                return i < 10 ?  '0' + i : i;
            },
            today = new Date(),
            h = today.getHours(),
            m = today.getMinutes(),
            s = today.getSeconds();

        self.data = {
            'time': h + ':' + formatTime(m) + ':' + formatTime(s),
            'date': today.toDateString()
        };
        self.render();
    };
    this.interval = 500;
};
