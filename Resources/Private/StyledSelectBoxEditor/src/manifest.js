import manifest from "@neos-project/neos-ui-extensibility";
import StyledSelectBoxEditor from "./StyledSelectBoxEditor";

manifest("NeosRulez.Neos:StyledSelectBoxEditor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("NeosRulez/Neos/Inspector/Editors/StyledSelectBoxEditor", {
        component: StyledSelectBoxEditor,
    });
});
