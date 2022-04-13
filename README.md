# Styled select box editor for Neos CMS

![Preview](https://raw.githubusercontent.com/patriceckhart/NeosRulez.Neos.StyledSelectBoxEditor/master/Preview.png)


## Installation

The NeosRulez.Neos.StyledSelectBoxEditor package is listed on packagist (https://packagist.org/packages/neosrulez/neos-styledselectboxeditor) - therefore you don't have to include the package in your "repositories" entry any more.

Just run:

```
composer require neosrulez/neos-styledselectboxeditor
```

## Configuration

```yaml
'Acme.Site:Document.Page':
  properties:
    fontFamily:
      type: string
      ui:
        label: Font family
        reloadIfChanged: true
        inspector:
          group: document
          editor: NeosRulez/Neos/Inspector/Editors/StyledSelectBoxEditor
          editorOptions:
            values:
              'impact':
                label: 'Impact'
                style: 'font-family: Impact;'
              'courier':
                label: 'Courier'
                style: 'font-family: Courier;'
              'georgia':
                label: 'Georgia'
                style: 'font-family: Georgia;'
```


## Author

* E-Mail: mail@patriceckhart.com
* URL: http://www.patriceckhart.com
