// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: riVYfd7Jgv4QCX85Q24XGF
// Component: JLw-SA9ZPY_M
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: riVYfd7Jgv4QCX85Q24XGF/projectcss
import sty from "./PlasmicCopyrightSocialLanguage.module.css"; // plasmic-import: JLw-SA9ZPY_M/css
import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: nTLvkHylKF_R/icon
import YoutubeIcon from "./icons/PlasmicIcon__Youtube"; // plasmic-import: Wh4wz11P9Bug/icon
import PintrestIcon from "./icons/PlasmicIcon__Pintrest"; // plasmic-import: npztDnL7TciT/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: jEDpkbWu0pFt/icon

createPlasmicElementProxy;

export const PlasmicCopyrightSocialLanguage__VariantProps = new Array();

export const PlasmicCopyrightSocialLanguage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCopyrightSocialLanguage__RenderFunc(props) {
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
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___4H1Ci)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xePns)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rr2NG
            )}
          >
            {"\u00a9 2021 ShoeShop, Inc. All Rights Reserved."}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__yccHk)}>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__xvtN
              )}
              component={Link}
              platform={"nextjs"}
            >
              <TwitterIcon
                className={classNames(projectcss.all, sty.svg__qhepj)}
                role={"img"}
              />
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__jL7Y
              )}
              component={Link}
              platform={"nextjs"}
            >
              <YoutubeIcon
                className={classNames(projectcss.all, sty.svg__audVw)}
                role={"img"}
              />
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___7Sr8K
              )}
              component={Link}
              platform={"nextjs"}
            >
              <PintrestIcon
                className={classNames(projectcss.all, sty.svg__mniH)}
                role={"img"}
              />
            </PlasmicLink__>
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__tSdUg)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___10Tk
            )}
          >
            {"English"}
          </div>
          <IconIcon
            className={classNames(projectcss.all, sty.svg___4BaTx)}
            role={"img"}
          />
        </Stack__>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCopyrightSocialLanguage__ArgProps,
          internalVariantPropNames: PlasmicCopyrightSocialLanguage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCopyrightSocialLanguage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyrightSocialLanguage";
  } else {
    func.displayName = `PlasmicCopyrightSocialLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyrightSocialLanguage = Object.assign(
  // Top-level PlasmicCopyrightSocialLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCopyrightSocialLanguage
    internalVariantProps: PlasmicCopyrightSocialLanguage__VariantProps,
    internalArgProps: PlasmicCopyrightSocialLanguage__ArgProps
  }
);

export default PlasmicCopyrightSocialLanguage;
/* prettier-ignore-end */
