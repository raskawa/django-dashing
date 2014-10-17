/*global Dashboard, $*/
Dashboard.widgets.Number = function (dashboard) {
    var self = this,
        widget;
    this.__init__ = function () {
        self.html = $('#templates').find('.widget-number').clone();
        self.html.css('background-color', self.color);
        widget = dashboard.grid.add_widget(
            self.html,
            self.col,
            self.row,
            self.colPosition,
            self.rowPosition);
    };
    this.row = 1;
    this.col = 1;
    this.color = '#96bf48';
    this.rowPosition = 1;
    this.colPosition = 1;

    this.render = function () {
        self.html.css('background-color', self.color);
        widget.find('.value').html(self.data.value);
        widget.find('.title').text(self.data.title);
        widget.find('.change-rate').text(self.data.change_rate);
        widget.find('.more-info').text(self.data.more_info);
        widget.find('.updated-at').text(self.data.updated_at);
    };
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 1000;
};
