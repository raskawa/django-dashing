===============================================
django-dashing
===============================================
`django-dashing` is a customisable, modular dashboard application framework for Django to visualize interesting data about your project. Inspired in the exceptionally handsome dashboard framework Dashing_

.. _Dashing: http://shopify.github.io/dashing/

Prerequisites
===============================================
- Django 1.5.+

Key concepts
===============================================
- Use premade widgets, or fully create your own with css, html, and javascript.
- Use the API to push data to your dashboards.
- Drag & Drop interface for re-arranging your widgets.

Installation
===============================================
1. Install latest stable version from PyPi:

.. code-block:: text

    $ pip install django-dashing

2. Add `dashing` to ``INSTALLED_APPS`` of the your projects.

.. code-block:: python

    INSTALLED_APPS = (
        ...
        'dashing',
    )

3. Include the dashboard URLconf in your project urls.py like this:

.. code-block:: python
    
    url(r'^dashboard/', include('dashing.urls')),

4. Start the development server and visit http://127.0.0.1:8000/dashboard/
   to view the dummy dashboard.



External Links
===============================================
- `Read the docs`__.
- Example_.

.. _readthedocs: http://django-dashing.readthedocs.org/
.. _Example: https://blog.talpor.com/2014/06/make-a-metric-dashboard-for-trello-with-django-das/

__ readthedocs_
