// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: riVYfd7Jgv4QCX85Q24XGF
// Component: EggimkGtIalQ
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  hasVariant,
  set as $stateSet,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import TextField from "../../TextField"; // plasmic-import: RU3mE6_LKxHE/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: riVYfd7Jgv4QCX85Q24XGF/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: EggimkGtIalQ/css
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: 79eJGvMqW8rd/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: uDglA6BaCbo8/icon
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: ku59NEMVj-9a/icon
import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: ZjwqWSTV6Jul/icon

createPlasmicElementProxy;

export const PlasmicNavBar__VariantProps = new Array("searchOpen");

export const PlasmicNavBar__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavBar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "searchOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.searchOpen
      },
      {
        path: "textField.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootsearchOpen]: hasVariant($state, "searchOpen", "searchOpen") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__pmowx, {
          [sty.freeBoxsearchOpen__pmowxXl4Ot]: hasVariant(
            $state,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <Stack__
          as={PlasmicLink__}
          hasGap={true}
          className={classNames(projectcss.all, projectcss.a, sty.link__dYe6J, {
            [sty.linksearchOpen__dYe6Jxl4Ot]: hasVariant(
              $state,
              "searchOpen",
              "searchOpen"
            )
          })}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <HomeIcon
            className={classNames(projectcss.all, sty.svg__khQoz)}
            role={"img"}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.textsearchOpen]: hasVariant(
                  $state,
                  "searchOpen",
                  "searchOpen"
                )
              }
            )}
          >
            {"Home"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__cGpcu, {
            [sty.freeBoxsearchOpen__cGpcuXl4Ot]: hasVariant(
              $state,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          <TextField
            data-plasmic-name={"textField"}
            data-plasmic-override={overrides.textField}
            className={classNames("__wab_instance", sty.textField, {
              [sty.textFieldsearchOpen]: hasVariant(
                $state,
                "searchOpen",
                "searchOpen"
              )
            })}
            onChange={async (...eventArgs) => {
              generateStateOnChangeProp($state, ["textField", "value"]).apply(
                null,
                eventArgs
              );
              if (
                eventArgs.length > 1 &&
                eventArgs[1] &&
                eventArgs[1]._plasmic_state_init_
              ) {
                return;
              }
            }}
            placeholder={"Search..."}
            showLabel={false}
          />

          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__rYbTf
            )}
            component={Link}
            onClick={async event => {
              const $steps = {};
              $steps["updateSearchOpen"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["searchOpen"]
                      },
                      operation: 0,
                      value: !$state.searchOpen
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;
                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateSearchOpen"] != null &&
                typeof $steps["updateSearchOpen"] === "object" &&
                typeof $steps["updateSearchOpen"].then === "function"
              ) {
                $steps["updateSearchOpen"] = await $steps["updateSearchOpen"];
              }
            }}
            platform={"nextjs"}
          >
            <SearchIcon
              className={classNames(projectcss.all, sty.svg___6GXz)}
              role={"img"}
            />
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__tG0Ph
            )}
            component={Link}
            href={"#"}
            platform={"nextjs"}
          >
            <ProfileIcon
              className={classNames(projectcss.all, sty.svg___2G0Gl)}
              role={"img"}
            />
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__oTrpP
            )}
            component={Link}
            href={"#"}
            platform={"nextjs"}
          >
            <CartIcon
              className={classNames(projectcss.all, sty.svg__v7U2)}
              role={"img"}
            />
          </PlasmicLink__>
        </Stack__>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "textField"],
  text: ["text"],
  textField: ["textField"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    textField: makeNodeComponent("textField"),
    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
